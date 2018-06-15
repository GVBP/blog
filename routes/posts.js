var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var model = require('./../model/posts')();

//
/* GET posts page */
// next referece a próxima middleware
router.get('/', function(req, res, next) {

    model.find(null, function(err, posts) {

        if (err) throw err;
        res.render('posts', { title : 'Postagens', posts : posts });
    });    
});

/* GET posts page 
router.get('/', function (req, res) {
    global.db.findAllPosts((e, docs) => {
        if (e) { return console.log(e); }
        console.log("teste", docs);
        res.render('posts', { title: 'Postagens', docs });
      });
    });
/*
router.get('/:id', function (req, res) {
    var id = req.params.id;
    global.db.findAllPosts((e, docs) => {
        if (e) { return console.log(e); }
        docs.forEach(function(doc) {
            if(doc._id == id) {
                res.render('comments', { title: "Comentários", doc });
            }
        });
    });
});
*/
router.get('/:id', function (req, res) {
    var id = req.params.id;
    global.db.teste(id, (e, doc) => {
        if (e) { return console.log(e); }
            res.render('comments', { title: "Comentários", doc });
        });
    });

module.exports = router;