CREATE SCHEMA amusement_park;

CREATE TABLE amusement_park.attraction(
                                          "id" bigint,
                                          "name" varchar(64),
                                          maintenance_price int,
                                          ticket_price int,
                                          people_capacity int
);
ALTER TABLE amusement_park.attraction
    ADD PRIMARY KEY("id");

INSERT INTO amusement_park.attraction (id, name, maintenance_price, ticket_price, people_capacity)
VALUES 	(1, 'Roller Coaster', 5000, 50, 100),
          (2, 'Ferris Wheel', 2000, 30, 50),
          (3, 'Haunted House', 1500, 40, 20),
          (4, 'Bumper Cars', 1000, 25, 30),
          (5, 'Water Slide', 3000, 35, 75),
          (6, 'Carousel', 1200, 20, 60),
          (7, 'Drop Tower', 2500, 45, 80),
          (8, 'Swing Ride', 800, 15, 40),
          (9, 'Go-Karts', 3500, 55, 25),
          (10, 'Mini Golf', 500, 10, 50);

SELECT name, ticket_price FROM amusement_park.attraction;

SELECT * FROM amusement_park.attraction;

SELECT name, ticket_price
FROM amusement_park.attraction
WHERE ticket_price <= 40
ORDER BY ticket_price DESC, name;

SELECT name, ticket_price
FROM amusement_park.attraction
ORDER BY ticket_price DESC
LIMIT 3;

SELECT AVG(maintenance_price) AS "Average maintenance price"
FROM amusement_park.attraction

SELECT SUM(maintenance_price) AS "Maintenance price for entire park"
FROM amusement_park.attraction

         UPDATE amusement_park.attraction SET ticket_price = 20 WHERE id = 2;
UPDATE amusement_park.attraction SET ticket_price = 45 WHERE ticket_price > 45;

DROP TABLE attraction;

CREATE TABLE "employee"(
                           "id" BIGINT,
                           "name" VARCHAR(32),
                           "position" VARCHAR(32),
                           "gender" VARCHAR(16),
                           "salary" INTEGER,
                           "date_of_birth" DATE,
                           "phone_number" VARCHAR(16)
);



