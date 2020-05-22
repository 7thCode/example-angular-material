const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

export class DBAccess {

	private collection: any = null;

	constructor() {
		MongoClient.connect("mongodb://localhost", (error, client) => {
			if (!error) {
				const _client = client;
				const db = _client.db("myDB");
				db.collection("myCollection", (error, collection) => {
					if (!error) {
						this.collection = collection;
					}
				});
			}
		});
	}

	public query(req, res): void {
		const queryformula = decodeURIComponent(req.params.queryformula);
		const queryobject = JSON.parse(queryformula);
		if (this.collection) {
			this.collection.find(queryobject).toArray((err3, result) => {
				if (!err3) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: -1, value: err3.message});
				}
			});
		}
	}

	public get(req, res): void {
		const id = decodeURIComponent(req.params.id);
		if (this.collection) {
			this.collection.findOne({_id: ObjectID(id)}, (err3, result) => {
				if (!err3) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: -1, value: err3.message});
				}
			});
		}
	}

	public create(req, res): void {
		const document = req.body;
		if (this.collection) {
			this.collection.insertOne(document, (error, result) => {
				if (!error) {
					res.json({code: 0, value: "ok"});
				} else {
					res.json({code: error.code, value: error.message});
				}
			});
		}

	}

	public update(req, res): void {
		const id = decodeURIComponent(req.params.id);
		const update = req.body;
		if (this.collection) {
			this.collection.updateOne({_id: ObjectID(id)}, update, (err3, result) => {
				if (!err3) {
					res.json({code: 0, value: "ok"});
				} else {
					res.json({code: -1, value: err3.message});
				}
			});
		}
	}

	public delete(req, res): void {
		const id = decodeURIComponent(req.params.id);
		if (this.collection) {
			this.collection.deleteOne({_id: ObjectID(id)}, (err3, result) => {
				if (!err3) {
					res.json({code: 0, value: "ok"});
				} else {
					res.json({code: -1, value: err3.message});
				}
			});
		}
	}

}

module.exports = DBAccess;
