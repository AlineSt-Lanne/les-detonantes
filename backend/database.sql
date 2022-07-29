CREATE DATABASE  IF NOT EXISTS les_detonantes;

DROP TABLE IF EXISTS sponsors;

CREATE TABLE `sponsors`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `sponsors` (image, name, category) VALUES
("https://postimg.cc/rDHCg5LL", "Mutuaide Assistance", "Assurance"),
("https://postimg.cc/r0xJDs32", "Decathlon", "Sport"),
("https://postimg.cc/y36v2Bpq", "Nantes", "Ville"),
("https://postimg.cc/S2krzkhX", "Télénantes", "Audiovisuelle");

DROP TABLE IF EXISTS admin;

CREATE TABLE `admin`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(100) UNIQUE,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `admin` (pseudo, password, role) VALUES
("Vicky", "$2b$10$uATpkS2uDrBZsey2TevZzeCu1kFjoKv7rwypcWctHl34rszrZ/c16", "ROLE_ADMIN"),
("Paulette", "$2b$10$jBFInQ5r.UQaowYpWfxSteByeU/aF0A3b8zKSB7ZIbvZ6P3YUD2ZG", "ROLE_ADMIN");