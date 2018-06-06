var express = require('express');
var router = express.Router();

/* GET posts page */
router.get('/', function (req, res) {
    global.db.findAllPosts((e, docs) => {
        if (e) { return console.log(e); }
        res.render('posts', { title: 'Postagens', docs });
      });
    });

router.get('/comments/:id', function (req, res) {
    var id = req.params.id;
    global.db.findOnePost( id,(e, doc) => {
        if (e) { return console.log(e); }
        res.render('comments', { title: "Comentários", doc });
    });
});

module.exports = router;