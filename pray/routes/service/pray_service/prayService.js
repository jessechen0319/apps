var db = require('../mongoConnector');

function insertPrayRecord(prayRecord) {

	var insertResult = false;
	db.open(function(err, db){
		db.collection('pray', function(err, collection) {

			if (prayRecord.name && prayRecord.content && prayRecord.date) {
				prayRecord.userId = -1;
				collection.insert(prayRecord, {safe:true},function(err,result){
	            	insertResult = true;
	            });
			} 
		});
	});
	return insertResult;
}

function getRecords() {

	var returnValue = [];
	db.open(function(err, db){

		db.collection('pray', function(err, collection){

			collection.find().toArray(function(err,docs){
				returnValue = docs;
			});
		});
	});
	return returnValue;
}

module.exports.insertPrayRecord = insertPrayRecord;
module.exports.getRecords = getRecords;