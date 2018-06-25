var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var model = require('./../model/posts')();


/* GET posts page */
// next referece a próxima middleware
router.get('/', function (req, res, next) {

    model.find(null, function (err, posts) {

        if (err) throw err;
        res.render('posts', { title: 'Postagens', posts: posts });
    });
});

/* GET posts/:id -> comments */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    model.findOne({ "_id" : id }, (err, doc) => {
        
        if (err) throw err;
        res.render('comments', { title: "Comentários", doc });
    });
});

module.exports = router;