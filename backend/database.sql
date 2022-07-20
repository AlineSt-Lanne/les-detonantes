CREATE DATABASE  IF NOT EXISTS les_detonantes;

DROP TABLE IF EXISTS sponsors;

CREATE TABLE `sponsors`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS admin;

CREATE TABLE `admin`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(100) UNIQUE,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `sponsors` (image, name, category) VALUES
("https://postimg.cc/rDHCg5LL", "Mutuaide Assistance", "Assurance"),
("https://postimg.cc/r0xJDs32", "Decathlon", "Sport"),
("https://postimg.cc/y36v2Bpq", "Nantes", "Ville"),
("https://postimg.cc/S2krzkhX", "Télénantes", "Audiovisuelle");
