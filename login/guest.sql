
CREATE DATABASE IF NOT EXISTS guest CHARACTER SET utf8 COLLATE utf8_bin;
USE guest;

CREATE TABLE IF NOT EXISTS guest (
  id int(12) NOT NULL,
  name varchar(10) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(50) NOT NULL,
message varchar (500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

alter table guest modify id int not null auto_increment primary key;
