var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
	const body = req.body;
	if (body.password === "123456") {
		res.json({code: 0, value: body.username});
	} else {
		res.json({code: -1, value: null});
	}
});


const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

router.post('/insert', function (req, res, next) {
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					const document = req.body;
					collection.insertOne(document, (err3, result) => {
						if (!err3) {
							res.json({code: 0, value: "ok"});
							client.close();
						} else {
							res.json({code: -1, value: err3.message});
						}
					});
				} else {
					res.json({code: -1, value: err2.message});
				}
			});
		} else {
			res.json({code: -1, value: err.message});
		}
	});
});

router.put('/update/:id', function (req, res, next) {
	const id = decodeURIComponent(req.params.id);
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					const update = req.body;
					collection.updateOne({"_id": ObjectID(id)}, update, (err3, result) => {
						if (!err3) {
							res.json({code: 0, value: "ok"});
							client.close();
						} else {
							res.json({code: -1, value: err3.message});
						}
					});
				} else {
					res.json({code: -1, value: err2.message});
				}
			});
		} else {
			res.json({code: -1, value: err.message});
		}
	});
});

router.delete('/delete/:id', function (req, res, next) {
	const id = decodeURIComponent(req.params.id);
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					collection.deleteOne({"_id": ObjectID(id)}, (err3, result) => {
						if (!err3) {
							res.json({code: 0, value: "ok"});
							client.close();
						} else {
							res.json({code: -1, value: err3.message});
						}
					});
				} else {
					res.json({code: -1, value: err2.message});
				}
			});
		} else {
			res.json({code: -1, value: err.message});
		}
	});
});

router.get('/query/:queryformula', function (req, res, next) {
	const queryformula = decodeURIComponent(req.params.queryformula);
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					const queryobject = JSON.parse(queryformula);
					collection.find(queryobject).toArray((err3, result) => {
						if (!err3) {
							res.json({code: 0, value: result});
							client.close();
						} else {
							res.json({code: -1, value: err3.message});
						}
					});
				} else {
					res.json({code: -1, value: err2.message});
				}
			});
		} else {
			res.json({code: -1, value: err.message});
		}
	});
});

router.get('/get/:id', function (req, res, next) {
	const id = decodeURIComponent(req.params.id);
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					collection.findOne({"_id": ObjectID(id)}, (err3, result) => {
						if (!err3) {
							res.json({code: 0, value: result});
							client.close();
						} else {
							res.json({code: -1, value: err3.message});
						}
					});
				} else {
					res.json({code: -1, value: err2.message});
				}
			});
		} else {
			res.json({code: -1, value: err.message});
		}
	});
});

module.exports = router;
