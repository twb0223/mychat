/*
SQLyog Enterprise - MySQL GUI v6.14
MySQL - 5.5.53 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `test`;

USE `test`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `AccountID` varchar(10) CHARACTER SET utf8 NOT NULL,
  `AccountName` varchar(150) CHARACTER SET utf8 NOT NULL,
  `Logo` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `CreateTime` datetime NOT NULL,
  `Password` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `account` */

insert  into `account`(`ID`,`AccountID`,`AccountName`,`Logo`,`CreateTime`,`Password`) values (1,'10001','kaka','imgs/face.jpg','2017-07-05 00:00:00','1'),(2,'10002','messie','imgs/friends.png','2017-07-05 00:00:00','1'),(3,'10003','pirlo','imgs/Smile.png','2017-09-08 00:00:00','1'),(4,'10004','inzaghi','imgs/Smile.png','2017-05-09 00:00:00','1');

/*Table structure for table `groups` */

DROP TABLE IF EXISTS `groups`;

CREATE TABLE `groups` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `GroupName` varchar(140) CHARACTER SET utf8 NOT NULL,
  `ParentAccountID` varchar(9) CHARACTER SET utf8 NOT NULL COMMENT '所属人accountid',
  `OrderIndex` tinyint(5) NOT NULL,
  `ContainAccountIds` text,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `OrderIndex` (`OrderIndex`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `groups` */

insert  into `groups`(`ID`,`GroupName`,`ParentAccountID`,`OrderIndex`,`ContainAccountIds`) values (1,'work','10001',1,'10002,10003'),(2,'dota','10001',2,'10004');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
