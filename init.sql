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
   `descp` VARCHAR(2000) NOT NULL,
   `beginTime` DATETIME,
   `endTime` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO user 
   (account_id, name, header,password,createTime)
   VALUES
   (1001, "阿飞", "xx","yf6533490",NOW());
	
INSERT INTO hotgoods
   (article_id, title, author,content,createTime) 
   VALUES 
   (10002, "产地直供番茄", "阿飞","文章内容",'2018-04-11 10:50:10');

