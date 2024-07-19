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

CREATE TABLE amusement_park.employee(
                                        "id" BIGINT,
                                        "name" VARCHAR(32),
                                        "position" VARCHAR(32),
                                        "gender" VARCHAR(16),
                                        "salary" INTEGER,
                                        "date_of_birth" DATE,
                                        "phone_number" VARCHAR(16)
);
ALTER TABLE amusement_park.employee
    ADD PRIMARY KEY("id");

INSERT INTO amusement_park.employee (id, name, position, salary)
VALUES (1, 'John', 'Ticket salesman', 2000),
       (2, 'Julie', 'Manager', 3500),
       (3, 'Mark', 'Janitor', 1800),
       (4, 'Anton', 'Maintenance', 3000),
       (5, 'Valerian', 'Maintenance', 3000);

CREATE TABLE amusement_park.attraction_employee(
                                                   id_attraction BIGINT,
                                                   id_employee BIGINT,
                                                   FOREIGN KEY (id_attraction) REFERENCES amusement_park.attraction("id"),
                                                   FOREIGN KEY (id_employee) REFERENCES amusement_park.employee("id")
)

INSERT INTO amusement_park.attraction_employee (id_attraction, id_employee)
VALUES
    (1,4),
    (1,5),
    (2,4),
    (2,5),
    (3,4),
    (4,4),
    (5,4),
    (6,5),
    (7,5),
    (8,4),
    (9,4),
    (10,5)

SELECT atr.name, maintenance_price, emp.name, position
FROM amusement_park.attraction AS atr
         INNER JOIN amusement_park.attraction_employee AS atr_e
                    ON atr_e.id_attraction = atr.id
         INNER JOIN amusement_park.employee AS emp
                    ON emp.id = atr_e.id_employee


SELECT name, title
FROM bar.employee JOIN bar.job ON bar.job.id = bar.employee.id_job


SELECT it.name, price, quantity, date, emp.name, title, price * quantity AS margin
FROM bar.transaction AS tr
         JOIN bar.item AS it ON it.id = tr.id_item
         JOIN bar.employee AS emp ON emp.id = tr.id_employee
         JOIN bar.job ON bar.job.id = emp.id_job


SELECT it.name, price, quantity, date, emp.name, title, price * quantity AS "margin"
FROM bar.transaction AS tr
         JOIN bar.item AS it ON it.id = tr.id_item
         JOIN bar.employee AS emp ON emp.id = tr.id_employee
         JOIN bar.job ON bar.job.id = emp.id_job
WHERE price * quantity >= 10

SELECT it.name, ing.name, it_ing.quantity
FROM bar.ingredient AS ing
         JOIN bar.item_ingredient AS it_ing ON it_ing.id_ingredient = ing.id
         JOIN bar.item AS it ON it.id = it_ing.id_item
