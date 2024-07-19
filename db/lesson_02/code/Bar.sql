CREATE TABLE bar."ingredient"(
                                 "id" BIGINT NOT NULL,
                                 "name" VARCHAR(255) NOT NULL,
                                 "quantity" BIGINT NOT NULL,
                                 PRIMARY KEY ("id")
);

CREATE TABLE bar."job"(
                          "id" BIGINT NOT NULL,
                          "title" VARCHAR(255) NOT NULL,
                          PRIMARY KEY ("id")
);

CREATE TABLE bar."employee"(
                               "id" BIGINT NOT NULL,
                               "name" VARCHAR(32) NOT NULL,
                               "id_job" BIGINT NOT NULL,
                               "salary" BIGINT NOT NULL,
                               PRIMARY KEY ("id"),
                               FOREIGN KEY ("id_job") REFERENCES bar."job" ("id")
);

CREATE TABLE bar."item"(
                           "id" BIGINT NOT NULL,
                           "price" BIGINT NOT NULL,
                           "name" VARCHAR(255) NOT NULL,
                           PRIMARY KEY ("id")
);

CREATE TABLE bar."transaction"(
                                  "id" BIGINT NOT NULL,
                                  "id_employee" BIGINT NOT NULL,
                                  "id_item" BIGINT NOT NULL,
                                  "quantity" BIGINT NOT NULL,
                                  "date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
                                  PRIMARY KEY ("id"),
                                  FOREIGN KEY ("id_employee") REFERENCES bar."employee" ("id"),
                                  FOREIGN KEY ("id_item") REFERENCES bar."item" ("id")
);

CREATE TABLE bar."item_ingredient"(
                                      "id_item" BIGINT NOT NULL,
                                      "id_ingredient" BIGINT NOT NULL,
                                      "quantity" BIGINT NOT NULL,
                                      PRIMARY KEY ("id_item", "id_ingredient"),
                                      FOREIGN KEY ("id_item") REFERENCES bar."item" ("id"),
                                      FOREIGN KEY ("id_ingredient") REFERENCES bar."ingredient" ("id")
);


INSERT INTO bar.job (id, title) VALUES
                                    (1, 'Bartender'),
                                    (2, 'Waiter'),
                                    (3, 'Chef'),
                                    (4, 'Manager'),
                                    (5, 'Dishwasher');

INSERT INTO bar.employee (id, name, id_job, salary) VALUES
                                                        (1, 'John Doe', 1, 3000),
                                                        (2, 'Jane Smith', 2, 2500),
                                                        (3, 'Michael Brown', 3, 3500),
                                                        (4, 'Emily Davis', 4, 5000),
                                                        (5, 'James Wilson', 5, 2200);

INSERT INTO bar.item (id, price, name) VALUES
                                           (1, 5.50, 'Margarita'),
                                           (2, 7.00, 'Old Fashioned'),
                                           (3, 4.50, 'Beer'),
                                           (4, 3.00, 'Soda'),
                                           (5, 6.50, 'Whiskey Sour'),
                                           (6, 2.00, 'French Fries'),
                                           (7, 3.50, 'Chicken Wings'),
                                           (8, 4.00, 'Mozzarella Sticks'),
                                           (9, 5.00, 'Nachos'),
                                           (10, 2.50, 'Pretzel'),
                                           (11, 6.00, 'Mojito'),
                                           (12, 5.50, 'Gin and Tonic'),
                                           (13, 7.50, 'Martini'),
                                           (14, 6.00, 'Daiquiri'),
                                           (15, 8.00, 'Manhattan'),
                                           (16, 7.00, 'Pina Colada'),
                                           (17, 6.50, 'Cosmopolitan'),
                                           (18, 6.00, 'Tequila Sunrise'),
                                           (19, 5.00, 'Bloody Mary'),
                                           (20, 7.00, 'Long Island Iced Tea');

INSERT INTO bar.ingredient (id, name, quantity) VALUES
                                                    (1, 'Tequila', 1000),
                                                    (2, 'Triple Sec', 500),
                                                    (3, 'Lime Juice', 300),
                                                    (4, 'Whiskey', 1000),
                                                    (5, 'Bitters', 200),
                                                    (6, 'Sugar', 100),
                                                    (7, 'Beer', 5000),
                                                    (8, 'Soda', 2000),
                                                    (9, 'Rum', 1000),
                                                    (10, 'Mint', 100),
                                                    (11, 'Gin', 1000),
                                                    (12, 'Vermouth', 500),
                                                    (13, 'Cola', 2000),
                                                    (14, 'Pineapple Juice', 500),
                                                    (15, 'Coconut Cream', 500),
                                                    (16, 'Vodka', 1000),
                                                    (17, 'Cranberry Juice', 500),
                                                    (18, 'Orange Juice', 500),
                                                    (19, 'Tomato Juice', 500),
                                                    (20, 'Lemon Juice', 300),
                                                    (21, 'Chicken', 500),
                                                    (22, 'Mozzarella Cheese', 200),
                                                    (23, 'Tortilla Chips', 500),
                                                    (24, 'Salt', 100),
                                                    (25, 'Pepper', 100),
                                                    (26, 'Oil', 500),
                                                    (27, 'Pretzel Dough', 300),
                                                    (28, 'Flour', 200);


INSERT INTO bar.item_ingredient (id_item, id_ingredient, quantity) VALUES
                                                                       (1, 1, 50),    -- Margarita
                                                                       (1, 2, 20),
                                                                       (1, 3, 10),
                                                                       (2, 4, 60),    -- Old Fashioned
                                                                       (2, 5, 5),
                                                                       (2, 6, 5),
                                                                       (3, 7, 100),   -- Beer
                                                                       (4, 8, 100),   -- Soda
                                                                       (5, 4, 50),    -- Whiskey Sour
                                                                       (5, 3, 10),
                                                                       (5, 20, 10),
                                                                       (6, 26, 20),   -- French Fries
                                                                       (6, 24, 2),
                                                                       (6, 25, 2),
                                                                       (7, 21, 50),   -- Chicken Wings
                                                                       (7, 26, 10),
                                                                       (8, 22, 20),   -- Mozzarella Sticks
                                                                       (8, 28, 10),
                                                                       (9, 23, 50),   -- Nachos
                                                                       (9, 22, 10),
                                                                       (10, 27, 30),  -- Pretzel
                                                                       (11, 9, 50),   -- Mojito
                                                                       (11, 10, 5),
                                                                       (11, 3, 10),
                                                                       (12, 11, 50),  -- Gin and Tonic
                                                                       (12, 8, 100),
                                                                       (13, 11, 50),  -- Martini
                                                                       (13, 12, 10),
                                                                       (14, 9, 50),   -- Daiquiri
                                                                       (14, 3, 10),
                                                                       (15, 4, 50),   -- Manhattan
                                                                       (15, 12, 10),
                                                                       (16, 9, 50),   -- Pina Colada
                                                                       (16, 14, 20),
                                                                       (16, 15, 20),
                                                                       (17, 16, 50),  -- Cosmopolitan
                                                                       (17, 17, 20),
                                                                       (17, 3, 10),
                                                                       (18, 1, 50),   -- Tequila Sunrise
                                                                       (18, 18, 20),
                                                                       (19, 16, 50),  -- Bloody Mary
                                                                       (19, 19, 20),
                                                                       (20, 11, 20),  -- Long Island Iced Tea
                                                                       (20, 16, 20),
                                                                       (20, 4, 20),
                                                                       (20, 1, 20),
                                                                       (20, 18, 20),
                                                                       (20, 13, 50);

INSERT INTO bar.transaction (id, id_employee, id_item, quantity, date) VALUES
                                                                           (1, 1, 1, 2, '2024-06-15 20:30:00'), -- John Doe served 2 Margaritas
                                                                           (2, 2, 7, 1, '2024-06-15 20:45:00'), -- Jane Smith served 1 Chicken Wings
                                                                           (3, 1, 3, 4, '2024-06-15 21:00:00'), -- John Doe served 4 Beers
                                                                           (4, 1, 5, 1, '2024-06-15 21:15:00'), -- John Doe served 1 Whiskey Sour
                                                                           (5, 2, 11, 3, '2024-06-15 21:30:00'), -- Jane Smith served 3 Mojitos
                                                                           (6, 1, 8, 2, '2024-06-15 21:45:00'), -- John Doe served 2 Mozzarella Sticks
                                                                           (7, 2, 13, 1, '2024-06-15 22:00:00'), -- Jane Smith served 1 Martini
                                                                           (8, 1, 17, 2, '2024-06-15 22:15:00'), -- John Doe served 2 Cosmopolitans
                                                                           (9, 2, 19, 1, '2024-06-15 22:30:00'), -- Jane Smith served 1 Bloody Mary
                                                                           (10, 2, 4, 3, '2024-06-15 22:45:00'); -- Jane Smith served 3 Sodas


