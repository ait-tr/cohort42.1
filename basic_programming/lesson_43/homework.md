## Задание 1.

**Читать теоретический материал:**

1. Герберт Шилдт, Java полное руководство (12 издание)
   - глава 10. Обработка исключения, стр.274-295
2. Кей Хорстманн, Core Java, Том 1. Основы (10 издание)
   - глава 7. Исключения, утверждения и протоколирование, стр.325-348
4. Методичка
   - [Исключения](https://docs.google.com/document/d/1ZF1orO04qnj0vtlc0IVLp2wNS83e_w4lX_L23hYc79I/)

## Задание 2.

**Задача 1.**
- Напишите метод calculateArray(), на вход которого подаётся двумерный строковый массив размером 4х4. При подаче массива другого размера необходимо бросить исключение MyArraySizeException.
- Далее метод должен пройтись по всем элементам массива, преобразовать в int и просуммировать. Если в каком-то элементе массива преобразование не удалось (например, в ячейке лежит символ или текст вместо числа), должно быть брошено исключение MyArrayDataException с детализацией, в какой именно ячейке лежат неверные данные.
- В методе main() вызвать полученный метод, обработать возможные исключения MyArraySizeException и MyArrayDataException и вывести результат расчета (сумму элементов, при условии что подали на вход корректный массив).

Заметки: 
- Для преобразования строки к числу используйте статический метод класса Integer:
```
Integer.parseInt(сюда_подать_строку);
```
- Если Java не сможет преобразовать входную строку (в строке число криво написано), то будет сгенерировано исключение NumberFormatException.