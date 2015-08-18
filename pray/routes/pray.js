var express = require('express');
var router = express.Router();
var prayService = require('./service/pray_service/prayService');
/* GET home page. */
router.get('/insertRecord', function(req, res, next) {
	var name = req.param('name'),
	content = req.param('content'),
	stringDate = req.param('date');

	var date = new Date(stringDate);

	var insertRecord = {'name': name, 'content': content, 'date': date};
	var result = prayService.insertPrayRecord(insertRecord);
	
	res.end({'result': result});
});

module.exports = router;
