var mongodb = require('mongodb');
var server = mongodb.Server('139.196.31.22', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('pray', server, {safe:true});

module.exports = db;