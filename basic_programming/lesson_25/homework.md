## Задание 1.

**Читать теоретический материал:**

1. Майк МакГрат, Java программирование для начинающих
   - глава 6
2. Кэти Сьерра, Берт Бейтс, Изучаем Java
   - главы 2,4,7
3. Герберт Шилдт, Java 8 руководство для начинающих (6 издание)
   - главы 4,6,7
4. Кей Хорстманн, Core Java, Том 1. Основы (10 издание)
   - глава 4,5

## Задание 2.

**Задача 1.**
Создайте иерархию классов человек -> спортсмен-любитель - > спортсмен-профи.
У человека есть метод бежать `run()`. Обычный человек бежит со скоростью 10 км/час, любитель - 15, профи - 25.
Также у бегунов есть необходимость в отдыхе. Человеку нужен отдых после пробежки 15 минут, любителю 10, профи 5.
В методе бежать - вызвать метод, который будет выводить количество минут, необходимых для отдыха бегунам.

**Задача 2.**
Создайте иерархию классов для разных типов транспортных средств: `Vehicle` (родительский класс), `Car`, `Bicycle` и `Motorcycle` (дочерние классы).
Родительский класс `Vehicle` должен иметь метод `startEngine()`, который не будет иметь реализации.
Дочерние классы `Car`, `Bicycle` и `Motorcycle` должны переопределить метод `startEngine()` для запуска соответствующего типа двигателя (если есть).
Создайте массив транспортных средств разных типов. Используйте полиморфизм для вызова метода `startEngine()` для каждого транспортного средства.

**Задача 3.**
Фигуры и их площади. Создайте класс Фигура `Figure` с методом `calcArea()` (рассчитать площадь).
Реализуйте классы различных геометрических фигур (например, Круг, Квадрат, Треугольник).
Создайте массив фигур и выведите (в цикле) площадь каждой из них.