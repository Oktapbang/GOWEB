
CREATE DATABASE IF NOT EXISTS review CHARACTER SET utf8 COLLATE utf8_bin;
USE review;

CREATE TABLE IF NOT EXISTS review (
  id int(100) NOT NULL,
  title varchar(50) NOT NULL,
  address varchar(50) NOT NULL,
  message varchar(500) NOT NULL,
  hashtag varchar(50) NOT NULL,
  imagePath varchar(50) NOT NULL,
  likes int(100) NOT NULL,
  views int(100) NOT NULL,
  userID varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

alter table review modify id int not null auto_increment primary key;

INSERT INTO review (id,title,address,message,hashtag,imagePath,likes,views,userID) VALUES (1, '공릉카페 국민은행', '서울시 노원구 공릉동', '좋아요! 너무좋은카페입니다!','#공릉카페#서울카페#국민은행','uploads/1.jpg',25,11,'hyun99999');
INSERT INTO review (title,address,message,hashtag,imagePath,likes,views,userID) VALUES ('공릉카페 하나은행', '서울시 노원구 공릉동', '잘 쉬었다 갑니다.','#공릉카페#서울카페#하나은행','uploads/2.jpg',20,10,'hyun99999');