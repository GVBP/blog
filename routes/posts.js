var express = require('express');
var router = express.Router();

/* GET posts page */
router.get('/', function (req, res, next) {
    global.db.findAllPosts((e, docs) => {
        if (e) { return console.log(e); }
        res.render('posts', { docs, title: 'Postagens' });
      })
    });

router.get('/comments', function (req, res, next) {
    res.render('comments', { title: "Comentários" });
});

module.exports = router;