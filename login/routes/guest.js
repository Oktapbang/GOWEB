var express = require('express');
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET guest page. */
router.get('/', function(req, res, next) {
  res.render('guest');
});

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2020',
	password : 'web2020',
	database : 'guest'
});

router.post('/submit',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    console.log(name, email, phone, message);

  connection.query('INSERT INTO guest (name, email, phone, message) VALUES(?,?,?,?)', [name, email, phone, message],
    function (error, data) {
      if (error)
       console.log(error);
     else
        console.log(data);
    }
  );
  res.redirect('/login');

});

module.exports = router;