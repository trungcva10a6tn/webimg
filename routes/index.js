var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: req.user });
});
router.get('/name/:user', function(req, res, next) {
    res.render('index', { title: req.params.user });
});
module.exports = router;
