## Задание 1.

**Читать теоретический материал:**

1. Герберт Шилдт, Java полное руководство (12 издание)
   - глава 20. Пакет java.util, часть 1: Collections Framework, стр.648-742
2. Кей Хорстманн, Core Java, Том 1. Основы (10 издание)
   - глава 9. Коллекции, стр.415-480
3. Методичка
   - [Java. Коллекции](https://docs.google.com/document/d/1n3oeHX-2lHGmTVdIhpJ_sl7n50EGX7oSZrq5Sjfkopo/)

## Задание 2.

**Задача 1.**
Написать метод, принимающий (в параметрах) два списка, реализующих интерфейс List.
Метод должен возвращать список из значений, присутствующих в обоих коллекциях.

**Задача 2.**
Задание повышенной сложности.
- Создайть два списка: ArrayList и LinkedList.
- Заполните их 5_000 одинаковыми случайными значениями от 0 до 1_000.
- Создайте 4 метода, принимающий реализацию интерфейса List.
  - В первом методе - получение всех значений элементов списка по его индексу.
  - Второй метод - вставка 2_000 новых значений по случайному индексу (диапазон индексов от 0 до размера списка)
  - Третий метод - удалить 1_000 элементов по случайному индексу. (диапазон индексов от 0 до размера коллекции)
  - Удалить 1_000 элементов по значению (диапазон случайных значений от 0 до 10_000)
- Все методы должны возвращать время, затраченное на выполнение метода в миллисекундах.
- Сравните для каждого из списка время выполнения каждого метода.