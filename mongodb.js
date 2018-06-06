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

// Encontra autor
function findAll(callback) {
    global.conn.collection("author").find({}).toArray(callback);
}

// Inseri Usuários
function usersMongo(item, callback) {
    global.conn.collection("users").insertMany(item, callback);
}

// Inseri Posts
function postsMongo(item, callback) {
    global.conn.collection("posts").insertMany(item, callback);
}

// Inseri comments
function commentsMongo(item, callback) {
    global.conn.collection("comments").insertMany(item, callback);
}

// Inseri albums
function albumsMongo(item, callback) {
    global.conn.collection("albums").insertMany(item, callback);
}

// Inseri photos
function photosMongo(item, callback) {
    global.conn.collection("photos").insertMany(item, callback);
}

// Junta posts c/ users
function findAllPosts(callback) {
    global.conn.collection('posts').aggregate([
        {
            $lookup:
                {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
        },
        { "$unwind": "$user" }
    ]).toArray(callback);
}

// Função para mostrar mais informações do Post
var ObjectId = require("mongodb").ObjectId;
function findOnePost(id, callback) {
    console.log(id);
    var testeArray = 
    global.conn.collection('posts').aggregate(
        {
            $lookup:
                {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
        },
        { "$unwind": "$user" },
        { $match : { "_id" : id } }
    );
    console.log('teste', testeArray);
}

module.exports = { findAll, usersMongo, postsMongo, commentsMongo, albumsMongo, photosMongo, findAllPosts, findOnePost }