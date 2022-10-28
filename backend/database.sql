SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE `clients` (
  `id` int  UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname`varchar(255) NOT NULL,
  `email`varchar(100) NOT NULL,
  `message`varchar(300) NOT NULL
) ;

