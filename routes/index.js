var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: '이게 타이틀이다~이말이야', content1:'이게 컨텐츠다~이말이야'});
});

module.exports = router;