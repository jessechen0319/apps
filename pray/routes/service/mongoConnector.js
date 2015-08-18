var mongodb = require('mongodb');
var server = mongodb.Server('139.196.31.22', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('pray', server, {safe:true});

db.open(function(err, db){
	if(!err){
		console.log('connect server success');
		db.collection('temp', function(error, collection){
			collection.find().toArray(function(err,docs){
               console.log('find');
               console.log(docs);
            }); 
		});
	}
});