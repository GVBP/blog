var express = require('express');
var router = express.Router();

/* GET posts page */
router.get('/', function (req, res, next) {
    res.render('posts', { title: "Postagens" });
});

router.get('/comments', function (req, res, next) {
    res.render('comments', { title: "Comentários" });
});

module.exports = router;