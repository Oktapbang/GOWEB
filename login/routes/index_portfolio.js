var express = require('express');
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var router = express.Router();

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2020',
	password : 'web2020',
	database : 'review'
});

/* GET team listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from review',function(err,rows,fields){
    t1 = rows[2].title;
    // t1 = '그림 그리는 카페, 그리고';
  });
  res.render('index_portfolio',{title:t1});
});

module.exports = router;
