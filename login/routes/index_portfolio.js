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
  connection.query('SELECT * from review order by likes desc',function(err,rows,fields){
    t1 = rows[0].title;
    a1 = rows[0].address;
    m1 = rows[0].message;
    h1 = rows[0].hashtag;
    l1 = rows[0].likes;
    u1 = rows[0].userID;

    // for(i=0;i<6;i++){
    //   x=('t'+i);
    //   y=('h'+i);
    //   z=('l'+i);
    //   t1 = rows[i].title;
    //   a1 = rows[i].address;
    //   m1 = rows[i].message;
    //   h1 = rows[i].hashtag;
    //   l1 = rows[i].likes;
    //   u1 = rows[i].userID;
    // }

    t1 = rows[0].title;
    h1 = rows[0].hashtag;
    l1 = rows[0].likes;
    i1 = rows[0].imagePath;

    t2 = rows[1].title;
    h2 = rows[1].hashtag;
    l2 = rows[1].likes;
    i2 = rows[1].imagePath;
    // i2 = 'uploasds/1.jpg';
    //포트폴리오도 건드린상태

    t3 = rows[2].title;
    h3 = rows[2].hashtag;
    l3 = rows[2].likes;
    i3 = rows[2].imagePath;

    t4 = rows[3].title;
    h4 = rows[3].hashtag;
    l4 = rows[3].likes;
    i4 = rows[3].imagePath;

    t5 = rows[4].title;
    h5 = rows[4].hashtag;
    l5 = rows[4].likes;
    i5 = rows[4].imagePath;

    t6 = rows[5].title;
    h6 = rows[5].hashtag;
    l6 = rows[5].likes;
    i6 = rows[5].imagePath;
  
  });
  res.render('index_portfolio',{title:t1,address:a1,message:m1,hashtag:h1,likes:l1,userID:u1,
  t1:t1,h1:h1,l1:l1,i1:i1,
  t2:t2,h2:h2,l2:l2,i2:i2,
  t3:t3,h3:h3,l3:l3,i3:i3,
  t4:t4,h4:h4,l4:l4,i4:i4,
  t5:t5,h5:h5,l5:l5,i5:i5,
  t6:t6,h6:h6,l6:l6,i6:i6
  });
});

module.exports = router;
