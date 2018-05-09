var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blog";

MongoClient.connect(url)
    .then(conn => global.conn = conn.db('blog'))
    .catch(err => console.log(err))

function findAll(callback) {
    global.conn.collection("author").find({}).toArray(callback);
}

module.exports = { findAll }