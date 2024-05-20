## Задание 1.

**Читать теоретический материал:**

1. Герберт Шилдт, Java полное руководство (12 издание)
   - глава 13. Ввод-вывод, оператор try с ресурсами, стр.367-400
   - глава 22. Ввод-вывод: исследование пакета java.io, стр.813-867
   - глава 23. Исследование системы NIO, стр.868-906
2. Кей Хорстманн, Core Java, Том 2. Расширенные средства программирования (10 издание)
   - глава 2. Ввод и вывод, стр.63-152
3. Методичка
   - [Средства ввода-вывода](https://docs.google.com/document/d/1WJJVVDiSID6oWpdJ8aKUBj1GF-QIECNDbixI3kKsSyo/)
4. Статья
   - [Эволюция Java на примере чтения строк из файла](https://habr.com/ru/articles/269667/)

## Задание 2.

**Задача 1.**
Дан файл с историей поступлений денег на счета пользователей за некий период времени.
Данные находятся в текстовом файле, каждая строка содержит: `<имяПользователя>:<суммаПоступления>`.

```text
user1:2050
user2:1200
user1:1700
user3:1800
user1:1300
user4:2100
user2:750
```

Задача: прочитать данные из файла и обработать их.

Результат обработки должен быть записан в два файла:
- `less.txt` список тех, кому **в сумме** перечисленно меньше 2000
- `more.txt` список тех, кому **в сумме** перечисленно 2000 и больше

Как должен выглядеть результат:

`less.txt`
```text
user2:1950
user3:1800
```

`more.txt:`
```text
user1:5050
user4:2100
```