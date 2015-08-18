var db = require('../mongoConnector');

function insertPrayRecord(prayRecord) {

	var insertResult = false;
	db.open(function(err, db){
		db.collection('pray', function(err, collection) {

			console.log(collection);
			if (prayRecord.name && prayRecord.content && prayRecord.date) {
				collection.insert(prayRecord, {safe:true},function(err,result){
	            	insertResult = true;
	            });
			} 
		});
	});
	return insertResult;
}

module.exports.insertPrayRecord = insertPrayRecord;