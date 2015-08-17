var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/insertRecord', function(req, res, next) {
	var name = req.param('name'),
	content = req.param('content'),
	date = req.param('date');


	
	res.end("hello");
});

module.exports = router;
