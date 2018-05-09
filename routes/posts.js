var express = require('express');
var router = express.Router();

/* GET posts page */
router.get('/', function (req, res, next) {
    res.render('posts', { title: "Blog - Postagem" });
});

router.get('/comments', function (req, res, next) {
    res.render('comments', { title: "Blog - Comentários" });
});

module.exports = router;