const mongoClient = require('mongodb').MongoClient;
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

function teste(id, callback) {
    var post = global.conn.collection('posts').find({ _id : Number(id) });
    var user = global.conn.collection('users').find({ _id : Number(post.userId) });
    var c = global.conn.collection('posts').find({ _id : Number(id) });
    var obj = { 'post' : { post, 'user':{user} }};
    return callback(obj);
    };

module.exports = { findAll, usersMongo, postsMongo, commentsMongo, albumsMongo, photosMongo, findAllPosts, teste }