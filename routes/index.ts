import * as path from "path";

const express: any = require("express");
const router = express.Router();

router.post("/login", function(req, res, next) {
	const body = req.body;
	if (body.password === "123456") {
		res.json({code: 0, value: body.username});
	} else {
		res.json({code: -1, value: null});
	}
});

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const DBAccess: any = require(path.join(__dirname, "/controller"));

const dbsccess = new DBAccess();

router.get("/query/:queryformula", function(req, res, next) {
	dbsccess.query(req, res);
});

router.get("/get/:id", function(req, res, next) {
	dbsccess.get(req, res);
});

router.post("/insert", function(req, res, next) {
	dbsccess.create(req, res);
});

router.put("/update/:id", function(req, res, next) {
	dbsccess.update(req, res);
});

router.delete("/delete/:id", function(req, res, next) {
	dbsccess.delete(req, res);
});

module.exports = router;
