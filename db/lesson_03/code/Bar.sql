SELECT * FROM bar.item WHERE name LIKE '_______';

SELECT * FROM bar.item WHERE name LIKE 'B%';

SELECT * FROM bar.item WHERE name ILIKE '%o%';

SELECT * FROM bar.item WHERE price IN (3, 6, 8);

-- два идентичных по результату запроса
SELECT * FROM bar.item WHERE price >= 6 AND price <= 8;
SELECT * FROM bar.item WHERE price BETWEEN 6 AND 8;

SELECT COUNT(*) FROM bar.item;

SELECT COUNT(*) FROM bar.item WHERE price > 5;
-- having, group by

-- сколько ингридиентов в каждой позиции меню
SELECT bar.item.name, COUNT(id_ingredient) FROM bar.item
                                                    INNER JOIN bar.item_ingredient ON bar.item_ingredient.id_item = bar.item.id
GROUP BY bar.item.name;

-- в скольких позициях меню каждый ингридиент
SELECT bar.ingredient.name, COUNT(bar.item.name) FROM bar.item
                                                          INNER JOIN bar.item_ingredient ON bar.item_ingredient.id_item = bar.item.id
                                                          INNER JOIN bar.ingredient ON bar.ingredient.id = id_ingredient
GROUP BY bar.ingredient.name;

-- в скольких позициях меню используется каждый сок
SELECT bar.ingredient.name, COUNT(bar.item.name) FROM bar.item
                                                          INNER JOIN bar.item_ingredient ON bar.item_ingredient.id_item = bar.item.id
                                                          INNER JOIN bar.ingredient ON bar.ingredient.id = id_ingredient
GROUP BY bar.ingredient.name HAVING bar.ingredient.name ILIKE '%juice%';

SELECT AVG(salary) FROM bar.employee;

SELECT name, salary FROM bar.employee WHERE salary = (SELECT MIN(salary) FROM bar.employee);

SELECT SUM(salary) FROM bar.employee;

SELECT country, AVG(height) FROM farmer GROUP BY country;

ALTER TABLE bar.item ADD CONSTRAINT price_positive CHECK (price > 0);

INSERT INTO bar.item (id, name) VALUES (56, 'Blue Lagoon');

CREATE INDEX item_price_index ON bar.item(price);

-- вывести имена, зарплаты и должности
SELECT name, salary, title FROM bar.employee JOIN bar.job ON bar.job.id = bar.employee.id_job;

-- вывести сотрудников с самой большой и самой маленькой зп
SELECT name, salary FROM bar.employee WHERE salary = (SELECT MIN(salary) FROM bar.employee)
                                         OR salary = (SELECT MAX(salary) FROM bar.employee);
-- или
SELECT name, salary FROM bar.employee WHERE salary = (SELECT MIN(salary) FROM bar.employee)
UNION
SELECT name, salary FROM bar.employee WHERE salary = (SELECT MAX(salary) FROM bar.employee);

-- Вывести 5 последних продаж
SELECT * FROM bar.transaction
ORDER BY date DESC
LIMIT 5;
-- вывести 5 последних продаж так, чтобы было ясно кто и что продал
SELECT item.name, price, quantity, employee.name, date FROM bar.transaction
                                                                JOIN bar.employee ON bar.employee.id = bar.transaction.id_employee
                                                                JOIN bar.item ON bar.item.id = bar.transaction.id_item
ORDER BY date DESC
LIMIT 5;

-- найти самую прибыльную продажу
SELECT item.name, price, quantity, employee.name, date, price * quantity AS total
FROM bar.transaction
         JOIN bar.employee ON bar.employee.id = bar.transaction.id_employee
         JOIN bar.item ON bar.item.id = bar.transaction.id_item
ORDER BY total DESC LIMIT 1

-- вывести все меню отсортировав по цене и в алфавитном порядке
SELECT * FROM bar.item
ORDER BY price ASC, name ASC;
