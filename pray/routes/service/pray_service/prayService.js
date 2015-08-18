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




function getRecords(res) {

	db.open(function(err, db){
		db.collection('pray', function(err, collection) {

			var cr= collection.find({}).toArray(function(err,docs){
		            if(err){
		                console.log("to Array Error");
		            }
		            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
		            res.end(JSON.stringify(docs));
		        });
		});
	});
}

module.exports.insertPrayRecord = insertPrayRecord;
module.exports.getRecords = getRecords;