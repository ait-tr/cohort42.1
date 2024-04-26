## Stream API

**Stream API** в Java позволяет обрабатывать последовательности элементов (например, коллекции) в функциональном стиле.
Stream API введено в Java 8 и является частью Java Collections Framework.

Основной интерфейс Stream предоставляет множество методов для выполнения операций с данными.

### Основные определения:

- **Stream** - последовательность элементов, поддерживающая параллельные и последовательные агрегатные операции.
- **Pipeline** - последовательность операций, выполняемых на потоке данных.
- **Intermediate operation (Промежуточная операция)** - операция, преобразующая поток и возвращающая новый поток, например, `filter`, `map`.
- **Terminal operation (Терминальная операция)** - операция, завершающая работу с потоком и возвращающая результат, например, `collect`, `forEach`.

### Основные методы Stream API:

#### Создание потока:

- `stream()` - создание потока из коллекции.
- `Arrays.stream(T[] array)` - создание потока из массива.
- `Stream.of(T... values)` - создание потока из перечисленных значений.
- `Stream.empty()` - создание пустого потока.
- `Stream.iterate(T seed, UnaryOperator<T> f)` - создание потока с элементами, генерируемыми итеративно.

#### Промежуточные операции:

- `filter(Predicate<T> predicate)` - фильтрация элементов потока.
- `map(Function<T, R> mapper)` - преобразование каждого элемента потока.
- `flatMap(Function<T, Stream<R>> mapper)` - преобразование каждого элемента потока в поток и объединение всех потоков в один.
- `distinct()` - удаление дубликатов.
- `sorted()` - сортировка элементов потока.
- `peek(Consumer<T> action)` - выполнение действия для каждого элемента потока без изменения потока.

#### Терминальные операции:

- `forEach(Consumer<T> action)` - выполнение действия для каждого элемента потока.
- `toArray()` - преобразование потока в массив.
- `reduce(BinaryOperator<T> accumulator)` - агрегация элементов потока с использованием аккумулятора.
- `collect(Collector<T, A, R> collector)` - преобразование потока в другую форму с использованием коллектора.
- `count()` - подсчет количества элементов в потоке.
- `anyMatch(Predicate<T> predicate)` - проверка, удовлетворяет ли хотя бы один элемент потока условию.
- `allMatch(Predicate<T> predicate)` - проверка, удовлетворяют ли все элементы потока условию.
- `noneMatch(Predicate<T> predicate)` - проверка, что ни один элемент потока не удовлетворяет условию.
- `findFirst()` - возврат первого элемента потока.
- `findAny()` - возврат любого элемента потока.

### Особенности Stream API:

1. **Ленивость**: Промежуточные операции ленивы и выполняются только при вызове терминальной операции.
2. **Неизменяемость**: Потоки не изменяют исходные данные.
3. **Параллельная обработка**: Потоки могут обрабатываться параллельно с помощью метода `parallel()`.

### Пример использования Stream API:

```
List<String> list = Arrays.asList("one", "two", "three", "four");
List<String> filteredList = list.stream()
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
System.out.println(filteredList);
```

### `Стримоз`

Это условное заболевание может возникнуть у разработчиков, которые недавно узнали о существовании Stream API.
Основной симптом - необузданное желание использовать Stream API для выполнения любых операций над коллекциями.