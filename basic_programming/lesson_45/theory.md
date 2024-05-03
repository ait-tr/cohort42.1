## Java Time API

В Java 8 была добавлена новая библиотека для работы с датой и временем, которая находится в пакете `java.time`.
Эта библиотека решает многие проблемы, которые были с предыдущими версиями API для работы с датами и временем, и предлагает более интуитивно понятный и гибкий функционал.

**Java Time API** (`java.time`) это часть стандартной библиотеки Java, предоставляющая классы для работы с датами и временем. 
Эта библиотека была введена в Java 8 и заменила старые классы из пакета `java.util.Date`

### Основные классы Java Time API:

- `LocalDate` - представляет дату (год, месяц, день) без времени и часового пояса.
- `LocalTime` - представляет время (часы, минуты, секунды и наносекунды) без даты и часового пояса.
- `LocalDateTime` - представляет дату и время без часового пояса.
- `ZonedDateTime` - представляет дату и время с часовым поясом.
- `Duration` - представляет продолжительность в секундах и наносекундах.
- `Period` - представляет период времени в годах, месяцах и днях.

### Рассмотрим подробнее основные классы Java Time API.

### LocalDate
`LocalDate` - представляет дату (год, месяц, день) без времени и часового пояса. Основные методы:

    - `now()` - возвращает текущую дату.
    - `of(int year, int month, int dayOfMonth)` - создает экземпляр `LocalDate` с указанными годом, месяцем и днем.
    - `parse(CharSequence text)` - создает экземпляр `LocalDate` из строки в формате ISO-8601 (например, "2000-01-01").
    - `plusDays(long days)` - добавляет указанное количество дней к дате.
    - `minusDays(long days)` - вычитает указанное количество дней из даты.
    - `getYear()`, `getMonth()`, `getDayOfMonth()` - возвращают год, месяц и день соответственно.

#### Создание объекта:
  ```
  LocalDate date = LocalDate.now();  // Текущая дата
  LocalDate specificDate = LocalDate.of(2023, Month.MAY, 15);  // Определенная дата
  ```

### LocalTime
`LocalTime` - представляет время (часы, минуты, секунды и наносекунды) без даты и часового пояса. Основные методы:

- `now()` - возвращает текущее время.
- `of(int hour, int minute, int second, int nanoOfSecond)` - создает экземпляр `LocalTime` с указанными часами, минутами, секундами и наносекундами.
- `parse(CharSequence text)` - создает экземпляр `LocalTime` из строки в формате ISO-8601 (например, "12:00:00").
- `plusHours(long hours)`, `plusMinutes(long minutes)`, `plusSeconds(long seconds)` - добавляют указанное количество часов, минут или секунд к времени.
- `minusHours(long hours)`, `minusMinutes(long minutes)`, `minusSeconds(long seconds)` - вычитают указанное количество часов, минут или секунд из времени.
- `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - возвращают часы, минуты, секунды и наносекунды соответственно.

#### Операции с датами:
```
LocalTime timeNow = LocalTime.now();
LocalTime timeTomorrow = timeNow.plusHours(24);
LocalTime timeYesterday = timeNow.minusHours(24);
LocalTime timeYesterday2 = timeNow.minus(24, ChronoUnit.HOURS);
```

### LocalDateTime
`LocalDateTime` - представляет дату и время без часового пояса. Основные методы:

- `now()` - возвращает текущую дату и время.
- `of(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond)` - создает экземпляр `LocalDateTime` с указанными годом, месяцем, днем, часами, минутами, секундами и наносекундами.
- `parse(CharSequence text)` - создает экземпляр `LocalDateTime` из строки в формате ISO-8601 (например, "2000-01-01T12:00:00").
- `plusDays(long days)`, `plusHours(long hours)` и т. д. - добавляют указанное количество дней, часов и т. д. к дате и времени.
- `minusDays(long days)`, `minusHours(long hours)` и т. д. - вычитают указанное количество дней, часов и т. д. из даты и времени.
- `getYear()`, `getMonth()`, `getDayOfMonth()`, `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - возвращают соответствующие компоненты даты и времени.

### ZonedDateTime
`ZonedDateTime` - представляет дату и время с часовым поясом. Основные методы:

- `now()` - возвращает текущую дату и время в часовом поясе по умолчанию.
- `of(LocalDateTime localDateTime, ZoneId zone)` - создает экземпляр `ZonedDateTime` с указанными датой, временем и часовым поясом.
- `parse(CharSequence text)` - создает экземпляр `ZonedDateTime` из строки в формате ISO-8601 (например, "2000-01-01T12:00:00+01:00").
- `plusDays(long days)`, `plusHours(long hours)` и т. д. - добавляют указанное количество дней, часов и т. д. к дате и времени с учетом часового пояса.
- `minusDays(long days)`, `minusHours(long hours)` и т. д. - вычитают указанное количество дней, часов и т. д. из даты и времени с учетом часового пояса.
- `getZone()` - возвращает часовой пояс.

### isAfter, isBefore и until
`isAfter`, `isBefore` и `until` — это методы, которые используются для сравнения и измерения времени в Java Time API.

#### isAfter
Метод `isAfter` проверяет, что текущий объект даты/времени идет после указанного объекта.

##### Пример использования `isAfter`:

```

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 25);
        LocalDate date2 = LocalDate.of(2023, 10, 24);
        boolean isAfter = date1.isAfter(date2);
        System.out.println(isAfter); // Выведет true, так как date1 после date2
    }
}
```

#### isBefore
Метод `isBefore` проверяет, что текущий объект даты/времени идет до указанного объекта.

##### Пример использования `isBefore`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        boolean isBefore = date1.isBefore(date2);
        System.out.println(isBefore); // Выведет true, так как date1 до date2
    }
}
```

#### until

Метод `until` измеряет время между текущим объектом даты/времени и указанным объектом. 
Результат измерения может быть представлен в различных единицах времени.

##### Пример использования `until`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        long daysBetween = date1.until(date2, ChronoUnit.DAYS);
        System.out.println(daysBetween); // Выведет 1, так как между date1 и date2 один день
    }
}
```

### ChronoUnit

`ChronoUnit` — это перечисление, которое представляет единицы времени, такие как секунды, минуты, часы, дни, недели, месяцы и года. 
Оно реализует интерфейс `TemporalUnit`, что позволяет использовать его в качестве аргумента для методов, принимающих `TemporalUnit`, 
например, для метода `until` в классах `LocalDate`, `LocalTime`, `LocalDateTime` и `ZonedDateTime`.

##### Вот примеры основных констант, которые определены в `ChronoUnit`:

- `NANOS` — наносекунды
- `MICROS` — микросекунды
- `MILLIS` — миллисекунды
- `SECONDS` — секунды
- `MINUTES` — минуты
- `HOURS` — часы
- `HALF_DAYS` — полудни (12 часов)
- `DAYS` — дни
- `WEEKS` — недели
- `MONTHS` — месяцы
- `YEARS` — года
- `DECADES` — десятилетия
- `CENTURIES` — столетия
- `MILLENNIA` — тысячелетия
- `ERAS` — эры

```
long monthsBetween = ChronoUnit.MONTHS.between(startDate, endDate);       
```

### Duration

`Duration` - представляет продолжительность в секундах и наносекундах.
Чаще всего используется для измерения коротких промежутков времени

#### Основные методы:

- `ofDays(long days)`, `ofHours(long hours)` и т. д. - создают экземпляр `Duration` с указанным количеством дней, часов и т. д.
- `plus(Duration duration)`, `minus(Duration duration)` - добавляют или вычитают указанную продолжительность.
- `toDays()`, `toHours()`, `toMinutes()`, `toMillis()`, `toNanos()` - возвращают продолжительность в соответствующих единицах измерения.

#### Пример использования:

```
Instant start = Instant.now();
// Здесь может быть какой-то код...
Instant end = Instant.now();
Duration timeElapsed = Duration.between(start, end);
long millis = timeElapsed.toMillis();
long seconds = timeElapsed.toSeconds();
```

### Instant
`Instant` — это класс в Java, который представляет момент времени в эпохе Unix (количество времени в миллисекундах с начала эпохи Unix: 1 января 1970 года, 00:00:00 UTC). Класс `Instant` является частью пакета `java.time` и предоставляет методы для работы с временем в формате Unix timestamp.

### Пример использования `Instant`:

```
import java.time.Instant;

public class Main {
    public static void main(String[] args) {
        Instant now = Instant.now();
        System.out.println(now); // Выведет текущий момент времени в формате Unix timestamp
    }
}
```

В нашем примере `Instant.now()` возвращает текущий момент времени, а `Duration.between(start, end)` вычисляет продолжительность между двумя моментами времени. `toMillis()` конвертирует продолжительность в миллисекунды.
Это позволяет замерить время выполнения кода, который находится между двумя моментами времени `start` и `end`.

### Period
`Period` - представляет период времени в годах, месяцах и днях. Основные методы:

    - `of(int years, int months, int days)` - создают экземпляр `Period` с указанным количеством лет, месяцев и дней.
    - `plus(Period period)`, `minus(Period period)` - добавляют или вычитают указанный период времени.
    - `getYears()`, `getMonths()`, `getDays()` - возвращают количество

```
LocalDate startDate = LocalDate.of(2022, Month.JANUARY, 1);
LocalDate endDate = LocalDate.of(2023, Month.DECEMBER, 31);
Period period = Period.between(startDate, endDate);
System.out.println(period.getYears() + " years " + period.getMonths() + " months " + period.getDays() + " days");
```

### DateTimeFormatter - Форматирование даты и времени
Для **форматирования** и **парсинга** дат используется класс `DateTimeFormatter`. Он позволяет создавать форматированные строки из дат и времени, а также обратно парсить строки в объекты дат и времени.
`Парсинг` - Анализ (разбор) строки, содержащей дату или время

#### Пример форматирования даты:

```
public class Main {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String formattedDate = now.format(formatter);
        System.out.println(formattedDate); // Выведет текущую дату и время в формате "день.месяц.год часы:минуты:секунды"
    }
}
```

#### Пример парсинга строки в дату и время

```
public class Main {
    public static void main(String[] args) {
        String date = "25.10.2023 15:30:00";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(date, formatter);
        System.out.println(dateTime); // Выведет "2023-10-25T15:30"
    }
}
```

### Обработка исключений при парсинге

Когда мы парсим строку в дату, стоит быть готовым к тому, что строка может быть некорректной и вызвать исключение.
Следует обрабатывать такие ситуации (как? Научимся позже)

#### Шаблоны для DateTimeFormatter

Метод `DateTimeFormatter.ofPattern(String pattern)` создает `DateTimeFormatter` с заданным шаблоном. Шаблон определяет, 
как дата и время будут форматироваться в строку, и наоборот, как строка будет разобрана в дату и время.

Примеры шаблонов:

- `"dd.MM.yyyy"` - день, месяц, год. Пример: "25.10.2023".
- `"HH:mm:ss"` - часы, минуты, секунды. Пример: "15:30:00".
- `"dd.MM.yyyy HH:mm:ss"` - день, месяц, год, часы, минуты, секунды. Пример: "25.10.2023 15:30:00".
- `"yyyy-MM-dd'T'HH:mm:ss"` - стандартный ISO 8601. Пример: "2023-10-25T15:30:00".

В шаблоне используются следующие символы:

- `y` - год.
- `M` - месяц.
- `d` - день.
- `H` - час в формате от 0 до 23.
- `m` - минута.
- `s` - секунда.

Количество повторений символа определяет формат:

- `"yy"` - двухзначный год, например "23".
- `"yyyy"` - четырехзначный год, например "2023".
- `"M"` - однозначный или двухзначный месяц, например "2" или "12".
- `"MM"` - двухзначный месяц, например "02" или "12".
- `"d"` - однозначный или двухзначный день, например "3" или "25".
- `"dd"` - двухзначный день, например "03" или "25".

Пример создания `DateTimeFormatter`:

```
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
```

Этот форматтер можно использовать для форматирования даты и времени в строку или наоборот:

```
LocalDateTime dateTime = LocalDateTime.now();
String formattedDate = dateTime.format(formatter);
LocalDateTime parsedDateTime = LocalDateTime.parse("25.10.2023 15:30:00", formatter);
```
