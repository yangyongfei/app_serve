CREATE TABLE IF NOT EXISTS `user`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `account_id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `header` VARCHAR(40) NOT NULL,
   `phone` VARCHAR(40) NOT NULL,
   `openId` VARCHAR(40) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `createTime` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `hotgoods`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `goods_id` INT NOT NULL,
   `type` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `img` VARCHAR(100) NOT NULL,
   `total` INT NOT NULL,
   `hasSale` INT NOT NULL,
   `descp` VARCHAR(2000) NOT NULL,
   `price` FLOAT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `seckill`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `goods_id` INT NOT NULL,
   `type` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `img` VARCHAR(100) NOT NULL,
   `descp` VARCHAR(2000) NOT NULL,
   `total` INT NOT NULL,
   `hasSale` INT NOT NULL,
   `beginTime` DATETIME,
   `endTime` DATETIME,
   `price` FLOAT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `kind`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   
   `parent_id` INT NOT NULL,
   `type` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `img` VARCHAR(100) NOT NULL,
   `descp` VARCHAR(2000) NOT NULL,
   `total` INT NOT NULL,
   `hasSale` INT NOT NULL,
   `beginTime` DATETIME,
   `endTime` DATETIME,
   `price` FLOAT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO hotgoods
   (goods_id,type,name,img,total,hasSale,descp,price) 
   VALUES 
   (1,'1',"产地直供番茄","11.png",1000,10,"空运直达,产地直供",17.7);


INSERT INTO seckill
   (goods_id, type, name,descp,total,hasSale,beginTime,endTime,price) 
   VALUES 
   (1,'1',"泰国榴莲","空运直达，产地直供","11.png",1000,100,'2018-09-03 10:50:10','2018-09-04 10:50:10',10);

