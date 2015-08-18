var db = require('../mongoConnector');

function insertPrayRecord(prayRecord) {
	db.open(function(err, db){
		db.collection('pray', function(err, collection) {

			console.log(collection);
			if (prayRecord.name && prayRecord.content && prayRecord.date) {
				collection.insert(prayRecord, {safe:true},function(err,result){
	            	console.log(result);
	            });
			} 
		});
	});
	
}

module.exports.insertPrayRecord = insertPrayRecord;