# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.16)
# Database: shop
# Generation Time: 2020-09-03 14:16:48 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `uuid` varchar(38) COLLATE utf8mb4_general_ci NOT NULL,
  `orgName` varchar(76) COLLATE utf8mb4_general_ci NOT NULL,
  `orgUuid` varchar(38) COLLATE utf8mb4_general_ci NOT NULL,
  `platform` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `operateName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(2000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `module` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entityKey` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `operateTime` datetime DEFAULT NULL,
  `operatorName` varchar(76) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `operatorUuid` varchar(38) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `version` bigint(20) DEFAULT '0',
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
