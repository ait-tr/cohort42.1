SELECT * FROM bar.employee WHERE salary > 3000;

SELECT id, title FROM bar.job WHERE id = 3 OR id = 4;

SELECT * FROM bar.job WHERE id IN (3, 4);

SELECT * FROM bar.item WHERE price = (SELECT MIN(price) FROM bar.item);

SELECT * FROM bar.item ORDER BY price DESC LIMIT 1

SELECT * FROM bar.ingredient WHERE quantity = 0

UPDATE bar.ingredient SET quantity = 10000 WHERE quantity = 0

-- Vladislav, 1500

INSERT INTO bar.employee ("id", "name", id_job, salary) VALUES (
                                                                       (SELECT MAX(id) FROM bar.employee) + 1,
                                                                       'Vladislav',
                                                                       (SELECT id FROM bar.job WHERE title = 'Bartender'),
                                                                       1500
                                                               )

SELECT * FROM bookstore.book WHERE price <= 10 AND left_in_store > 0

SELECT * FROM farmer WHERE height = (
    SELECT MAX(height) FROM farmer)

SELECT * FROM farmer WHERE number_of_children = 0

SELECT * FROM farmer WHERE country = 'Poland'

-- Вывести всех фермеров из страны, в которой самый многодетный фермер
SELECT * FROM farmer WHERE country = (
    SELECT country FROM farmer WHERE number_of_children =
                                     (SELECT MAX(number_of_children) FROM farmer)
)

