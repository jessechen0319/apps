var express = require('express');
var router = express.Router();
var prayService = require('./service/pray_service/prayService');
/* GET home page. */
router.post('/insertRecord', function(req, res, next) {
	
	var name = unescape(req.param('name')),
	content = decodeURIComponent(req.param('content')),
	stringDate = decodeURIComponent(req.param('date'));

	var date = new Date(stringDate);

	var insertRecord = {'name': name, 'content': content, 'date': date};
	console.log(JSON.stringify(insertRecord));
	var result = prayService.insertPrayRecord(insertRecord);
	
	res.end(JSON.stringify({'result': result}));
});

router.get('/getRecords', function(req, res, next){

	var result = prayService.getRecords();
	res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
	res.end(JSON.stringify(result));
});

module.exports = router;
