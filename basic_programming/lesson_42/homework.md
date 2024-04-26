## Задание 1.

**Читать теоретический материал:**

1. Герберт Шилдт, Java полное руководство (12 издание)
   - глава 15. Лямбда-выражения, стр.444-472
   - глава 30. Потоковый API интерфейс, стр.1134-1159
2. Кей Хорстманн, Core Java, Том 1. Основы (10 издание)
   - глава 6. Интерфейсы, лямбда-выражения и внутренние классы, стр.288-300
3. Ричард Уорбертон, Лямбда-выражения в Java 8:
   - глава 2. Лямбда-выражения, стр.20-30
   - Глава 3. Потоки, стр.31-54
4. Статья
   - [Java 8 Stream API: шпаргалка для программиста](https://highload.today/java-stream-api/)

## Задание 2.

**Задача 1.**
Есть список целых чисел. Отфильтруйте только чётные числа, собрав их в новый список.

**Задача 2.**
Есть список слов, причем буквы в словах могут быть в разных регистрах, например: hEllO, JaVa, LAMBDA
Преобразуйте регистр букв таким образом, чтобы каждое было записано буквами в нижнем регистра и начиналось с большой буквы.
Пример: `[hEllO, JaVa, LAMBDA]` -> `[Hello, Java, Lambda]`

**Задача 3.**
Используя список книг с занятия `Collection<LibraryBook>` сделайте отдельные списки книг по авторам.
А также получите список всех издательств, выпускавших эти книги.