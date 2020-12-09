var express = require('express');
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var router = express.Router();
var MySqlStore = require('express-mysql-session')(session);

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'uploads/');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
  }
});
var upload = multer({storage:storage});

/* GET faq listing. */
router.get('/', function(req, res, next) {
  res.render('faq');
});

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2020',
	password : 'web2020',
	database : 'review'
});

router.use(session({
	secret: 'secret',
	resave: false,
  saveUninitialized: true,
  store : new MySqlStore({
		host : 'localhost',
		port : 3306,
		user : 'web2020',
		password : 'web2020',
		database: 'web'
	})
}));

// router.post('/faq/addReview',upload.array('img',2), function (req, res) {
  router.post('/addReview',upload.single('img'), function (req, res) {
  var title = req.body.title;
  var address = req.body.address;
  var message = req.body.message;
  var hashtag = req.body.hashtag;
  var imagePath = req.file.path;
  var likes = 0;
  //이 부분에 로그인한 세션에서 아이디 가져올 수 있따면?
  var userID = req.session.username;

  console.log(title,address,message,hashtag,imagePath,likes,userID);

  connection.query('INSERT INTO review (title,address,message,hashtag,imagePath,likes,userID) VALUES(?,?,?,?,?,?,?)', [title,address,message,hashtag,imagePath,likes,userID],
    function (error, data) {
      if (error)
       console.log(error);
     else
        console.log(data);
    }
  );
  res.redirect('/');
});

module.exports = router;
