var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  global.db.findAll((e, docs) => {
    if(e) throw e;
    res.render('users', { docs });
  })
});

module.exports = router;
