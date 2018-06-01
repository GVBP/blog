// Tem que selecionar a base de dados para visualizar.

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blog";
MongoClient.connect(url)
    .then(conn => global.conn = conn.db('blog'))
    .catch(err => console.log(err))
*/

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost:27017/blog')
    .then(conn => global.conn = conn.db('blog'))
    .catch(err => console.log(err)
    .then(conn.db.close()))

function findAll(callback) {
    global.conn.collection("author").find({}).toArray(callback);
}

function usersMongo(item, callback) {
    global.conn.collection("users").insertMany(item, callback);
}

function postsMongo(item, callback) {
    global.conn.collection("posts").insertMany(item, callback);
}

function commentsMongo(item, callback) {
    global.conn.collection("comments").insertMany(item, callback);
}

function albumsMongo(item, callback) {
    global.conn.collection("albums").insertMany(item, callback);
}

function photosMongo(item, callback) {
    global.conn.collection("photos").insertMany(item, callback);
}

function findAllPosts(callback) {
    global.conn.collection('posts').find({}).toArray(callback);
}

module.exports = { findAll, usersMongo, postsMongo, commentsMongo, albumsMongo, photosMongo, findAllPosts }