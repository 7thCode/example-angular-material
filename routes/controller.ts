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

	public query(req: any, res: any): void {
		const queryformula: string = decodeURIComponent(req.params.queryformula);
		const queryobject: any = JSON.parse(queryformula);
		if (this.collection) {
			this.collection.find(queryobject).toArray((err3, result): void => {
				if (!err3) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: -1, value: err3.message});
				}
			});
		}
	}

	public get(req: any, res: any): void {
		const id: string = decodeURIComponent(req.params.id);
		if (this.collection) {
			this.collection.findOne({_id: ObjectID(id)}, (error: any, result: any): void => {
				if (!error) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: error.code, value: error.message});
				}
			});
		} else {
			res.json({code: -1, value: "db error."});
		}
	}

	public create(req: any, res: any): void {
		const document: any = req.body;
		if (this.collection) {
			this.collection.insertOne(document, (error: any, result: any): void => {
				if (!error) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: error.code, value: error.message});
				}
			});
		} else {
			res.json({code: -1, value: "db error."});
		}
	}

	public update(req: any, res: any): void {
		const id: string = decodeURIComponent(req.params.id);
		const update: any = req.body;
		if (this.collection) {
			this.collection.updateOne({_id: ObjectID(id)}, update, (error: any, result: any): void => {
				if (!error) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: error.code, value: error.message});
				}
			});
		} else {
			res.json({code: -1, value: "db error."});
		}
	}

	public delete(req, res): void {
		const id: string = decodeURIComponent(req.params.id);
		if (this.collection) {
			this.collection.deleteOne({_id: ObjectID(id)}, (error: any, result: any): void => {
				if (!error) {
					res.json({code: 0, value: result});
				} else {
					res.json({code: error.code, value: error.message});
				}
			});
		} else {
			res.json({code: -1, value: "db error."});
		}
	}

}

module.exports = DBAccess;
