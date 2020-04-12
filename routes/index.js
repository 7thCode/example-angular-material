var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
	const body = req.body;
	if (body.password === "123456") {
		res.json({code: 0, value:null});
	} else {
		res.json({code: -1, value:null});
	}
});

module.exports = router;
