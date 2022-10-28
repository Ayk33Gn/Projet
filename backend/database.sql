CREATE TABLE `clients` (
  `id` int  UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname`varchar(255) NOT NULL,
  `email`varchar(100) NOT NULL,
  `message`varchar(300) NOT NULL,

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

