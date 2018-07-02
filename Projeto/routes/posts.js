var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var modelPost = require('./../model/posts')();
var modelUser = require('./../model/users')();
var modelComments = require('./../model/comments')();

var json = {};


/* GET posts page */
// next referece a próxima middleware
router.get('/', function (req, res, next) {

    modelPost.find(null, function (err, posts) {
        // if (err) throw err;
        // res.render('posts', { title: 'Postagens', posts: posts });
        json.posts = posts;

        modelUser.find(null, function(err, users) {
            json.users = users;

            modelComments.find(null, function(err, comments) {
                json.comments = comments;

                res.json(json);

                // res.write().json(json);
            });
        });
    });
});

/* GET posts/:id -> comments */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    modelPost.findOne({ "_id" : id }, (err, doc) => {
        
        if (err) throw err;
        res.render('comments', { title: "Comentários", doc });
    });
});

module.exports = router;