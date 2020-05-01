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


router.get('/query/:queryformula', function (req, res, next) {
	const queryformula = req.params.queryformula;
	MongoClient.connect('mongodb://localhost', (err, client) => {
		if (!err) {
			const db = client.db("myDB");
			db.collection("myCollection", (err2, collection) => {
				if (!err2) {
					collection.find(queryformula).toArray((err3, result) => {
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
