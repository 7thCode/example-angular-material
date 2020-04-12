var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
	const body = req.body;
	res.json({code: 0, value:body})
});

module.exports = router;
