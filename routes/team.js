var express = require('express');
var router = express.Router();

/* GET team listing. */
router.get('/', function(req, res, next) {
  res.render('team');
});

module.exports = router;
