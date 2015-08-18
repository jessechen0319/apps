var db = require('../mongoConnector');

function insertPrayRecord(prayRecord) {

	db.collection('pray', function(err, collection) {
		if (prayRecord.name && prayRecord.content && prayRecord.date) {
			collection.insert(prayRecord, {safe:true},function(err,result){
            	console.log(result);
            });
		} 
	});
}

insertPrayRecord({'name':'jesse', 'content': 'hello world', 'date': '2015-06-01'});

module.exports.insertPrayRecord = insertPrayRecord;