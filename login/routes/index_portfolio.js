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

var t1 = 0;
var h1 = 0;
var l1 = 0;
var i1 = 0;
var a1 = 0;
var m1 = 0;
var u1 = 0;
var v1 = 0;

var t2 = 0;
var h2 = 0;
var l2 = 0;
var i2 = 0;
var a2 = 0;
var m2 = 0;
var u2 = 0;
var v2 = 0;

var t3 = 0;
var h3 = 0;
var l3 = 0;
var i3 = 0;
var a3 = 0;
var m3 = 0;
var u3 = 0;
var v3 = 0;

var t4 = 0;
var h4 = 0;
var l4 = 0;
var i4 = 0;
var a4 = 0;
var m4 = 0;
var u4 = 0;
var v4 = 0;

var t5 = 0;
var h5 = 0;
var l5 = 0;
var i5 = 0;
var a5 = 0;
var m5 = 0;
var u5 = 0;
var v5 = 0;

var t6 = 0;
var h6 = 0;
var l6 = 0;
var i6 = 0;
var a6 = 0;
var m6 = 0;
var u6 = 0;
var v6 = 0;

var rt1 = 0;
var rh1 = 0;
var rl1 = 0;
var ri1 = 0;
var ra1 = 0;
var rm1 = 0;
var ru1 = 0;
var rv1 = 0;

var rt2 = 0;
var rh2 = 0;
var rl2 = 0;
var ri2 = 0;
var ra2 = 0;
var rm2 = 0;
var ru2 = 0;
var rv2 = 0;

var rt3 = 0;
var rh3 = 0;
var rl3 = 0;
var ri3 = 0;
var ra3 = 0;
var rm3 = 0;
var ru3 = 0;
var rv3 = 0;

var rt4 = 0;
var rh4 = 0;
var rl4 = 0;
var ri4 = 0;
var ra4 = 0;
var rm4 = 0;
var ru4 = 0;
var rv4 = 0;

var rt5 = 0;
var rh5 = 0;
var rl5 = 0;
var ri5 = 0;
var ra5 = 0;
var rm5 = 0;
var ru5 = 0;
var rv5 = 0;

var rt6 = 0;
var rh6 = 0;
var rl6 = 0;
var ri6 = 0;
var ra6 = 0;
var rm6 = 0;
var ru6 = 0;
var rv6 = 0;

var rt7 = 0;
var rh7 = 0;
var rl7 = 0;
var ri7 = 0;
var ra7 = 0;
var rm7 = 0;
var ru7 = 0;
var rv7 = 0;

var rt8 = 0;
var rh8 = 0;
var rl8 = 0;
var ri8 = 0;
var ra8 = 0;
var rm8 = 0;
var ru8 = 0;
var rv8 = 0;

var rt9 = 0;
var rh9 = 0;
var rl9 = 0;
var ri9 = 0;
var ra9 = 0;
var rm9 = 0;
var ru9 = 0;
var rv9 = 0;

var rt10 = 0;
var rh10 = 0;
var rl10 = 0;
var ri10 = 0;
var ra10 = 0;
var rm10 = 0;
var ru10 = 0;
var rv10 = 0;

/* GET team listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from review order by likes desc',function(err,rows,fields){

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
    a1 = rows[0].address;
    m1 = rows[0].message;
    h1 = rows[0].hashtag;
    l1 = rows[0].likes;
    i1 = rows[0].imagePath;
    u1 = rows[0].userID;
    v1 = rows[0].views;

    t2 = rows[1].title;
    h2 = rows[1].hashtag;
    l2 = rows[1].likes;
    i2 = rows[1].imagePath;
    a2 = rows[1].address;
    m2 = rows[1].message;
    u2 = rows[1].userID;
    v2 = rows[1].views;
    // i2 = 'uploasds/1.jpg';
    //포트폴리오도 건드린상태


    t3 = rows[2].title;
    h3 = rows[2].hashtag;
    l3 = rows[2].likes;
    i3 = rows[2].imagePath;
    a3 = rows[2].address;
    m3 = rows[2].message;
    u3 = rows[2].userID;
    v3 = rows[2].views;

    t4 = rows[3].title;
    h4 = rows[3].hashtag;
    l4 = rows[3].likes;
    i4 = rows[3].imagePath;
    a4 = rows[3].address;
    m4 = rows[3].message;
    u4 = rows[3].userID;
    v4 = rows[3].views;

    t5 = rows[4].title;
    h5 = rows[4].hashtag;
    l5 = rows[4].likes;
    i5 = rows[4].imagePath;
    a5 = rows[4].address;
    m5 = rows[4].message;
    u5 = rows[4].userID;
    v5 = rows[4].views;

    t6 = rows[5].title;
    h6 = rows[5].hashtag;
    l6 = rows[5].likes;
    i6 = rows[5].imagePath;
    a6 = rows[5].address;
    m6 = rows[5].message;
    u6 = rows[5].userID;  
    v6 = rows[5].views;
  });

  connection.query('SELECT * from review order by id desc limit 10',function(err,rows,fields){
    rt1 = rows[0].title;
    ra1 = rows[0].address;
    rm1 = rows[0].message;
    rh1 = rows[0].hashtag;
    rl1 = rows[0].likes;
    ri1 = rows[0].imagePath;
    ru1 = rows[0].userID;
    rv1 = rows[0].views;
    


    rt2 = rows[1].title;
    rh2 = rows[1].hashtag;
    rl2 = rows[1].likes;
    ri2 = rows[1].imagePath;
    ra2 = rows[1].address;
    rm2 = rows[1].message;
    ru2 = rows[1].userID;
    rv2 = rows[1].views;

    rt3 = rows[2].title;
    rh3 = rows[2].hashtag;
    rl3 = rows[2].likes;
    ri3 = rows[2].imagePath;
    ra3 = rows[2].address;
    rm3 = rows[2].message;
    ru3 = rows[2].userID;
    rv3 = rows[2].views;

    rt4 = rows[3].title;
    rh4 = rows[3].hashtag;
    rl4 = rows[3].likes;
    ri4 = rows[3].imagePath;
    ra4 = rows[3].address;
    rm4 = rows[3].message;
    ru4 = rows[3].userID;
    rv4 = rows[3].views;

    rt5 = rows[4].title;
    rh5 = rows[4].hashtag;
    rl5 = rows[4].likes;
    ri5 = rows[4].imagePath;
    ra5 = rows[4].address;
    rm5 = rows[4].message;
    ru5 = rows[4].userID;
    rv5 = rows[4].views;

    rt6 = rows[5].title;
    rh6 = rows[5].hashtag;
    rl6 = rows[5].likes;
    ri6 = rows[5].imagePath;
    ra6 = rows[5].address;
    rm6 = rows[5].message;
    ru6 = rows[5].userID;  
    rv6 = rows[5].views;

    rt7 = rows[6].title;
    rh7 = rows[6].hashtag;
    rl7 = rows[6].likes;
    ri7 = rows[6].imagePath;
    ra7 = rows[6].address;
    rm7 = rows[6].message;
    ru7 = rows[6].userID;  
    rv7 = rows[6].views;

    rt8 = rows[7].title;
    rh8 = rows[7].hashtag;
    rl8 = rows[7].likes;
    ri8 = rows[7].imagePath;
    ra8 = rows[7].address;
    rm8 = rows[7].message;
    ru8 = rows[7].userID; 
    rv8 = rows[7].views;
    
    rt9 = rows[8].title;
    rh9 = rows[8].hashtag;
    rl9 = rows[8].likes;
    ri9 = rows[8].imagePath;
    ra9 = rows[8].address;
    rm9 = rows[8].message;
    ru9 = rows[8].userID;  
    rv9 = rows[8].views;

    rt10 = rows[9].title;
    rh10 = rows[9].hashtag;
    rl10 = rows[9].likes;
    ri10 = rows[9].imagePath;
    ra10 = rows[9].address;
    rm10 = rows[9].message;
    ru10 = rows[9].userID;  
    rv10 = rows[9].views;

  });

  res.render('index_portfolio',{
  t1:t1,h1:h1,l1:l1,i1:i1,a1:a1,m1:m1,u1:u1,v1:v1,
  t2:t2,h2:h2,l2:l2,i2:i2,a2:a2,m2:m2,u2:u2,v2:v2,
  t3:t3,h3:h3,l3:l3,i3:i3,a3:a3,m3:m3,u3:u3,v3:v3,
  t4:t4,h4:h4,l4:l4,i4:i4,a4:a4,m4:m4,u4:u4,v4:v4,
  t5:t5,h5:h5,l5:l5,i5:i5,a5:a5,m5:m5,u5:u5,v5:v5,
  t6:t6,h6:h6,l6:l6,i6:i6,a6:a6,m6:m6,u6:u6,v6:v6,

  rt1:rt1,rh1:rh1,rl1:rl1,ri1:ri1,ra1:ra1,rm1:rm1,ru1:ru1,rv1:rv1,
  rt2:rt2,rh2:rh2,rl2:rl2,ri2:ri2,ra2:ra2,rm2:rm2,ru2:ru2,rv2:rv2,
  rt3:rt3,rh3:rh3,rl3:rl3,ri3:ri3,ra3:ra3,rm3:rm3,ru3:ru3,rv3:rv3,
  rt4:rt4,rh4:rh4,rl4:rl4,ri4:ri4,ra4:ra4,rm4:rm4,ru4:ru4,rv4:rv4,
  rt5:rt5,rh5:rh5,rl5:rl5,ri5:ri5,ra5:ra5,rm5:rm5,ru5:ru5,rv5:rv5,
  rt6:rt6,rh6:rh6,rl6:rl6,ri6:ri6,ra6:ra6,rm6:rm6,ru6:ru6,rv6:rv6,
  rt7:rt7,rh7:rh7,rl7:rl7,ri7:ri7,ra7:ra7,rm7:rm7,ru7:ru7,rv7:rv7,
  rt8:rt8,rh8:rh8,rl8:rl8,ri8:ri8,ra8:ra8,rm8:rm8,ru8:ru8,rv8:rv8,
  rt9:rt9,rh9:rh9,rl9:rl9,ri9:ri9,ra9:ra9,rm9:rm9,ru9:ru9,rv9:rv9,
  rt10:rt10,rh10:rh10,rl10:rl10,ri10:ri10,ra10:ra10,rm10:rm10,ru10:ru10,rv10:rv10
  

  });
});

router.post('/likeup',function(req,res){
  var title = req.body.title;
  var like = req.body.like;
  console.log(title,like);

  connection.query('update review set likes = ? where title =?',[like,title],function(req,res,next){


  });
});

router.post('/viewup',function(req,res){
  var title = req.body.title;
  var view = req.body.view;
  console.log(title,view);

  connection.query('update review set views = ? where title =?',[view,title],function(req,res,next){

  });
});

module.exports = router;
