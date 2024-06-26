## Интерфейс Set

Интерфейс `Set` в Java является частью Java Collections Framework и представляет собой коллекцию, которая не содержит повторяющихся элементов. 
Это один из фундаментальных интерфейсов в Java, который используется для хранения уникальных элементов.

### Основные характеристики интерфейса Set:

1. **Уникальность элементов:** Коллекция не может содержать дублирующиеся элементы.
2. **Нет гарантии порядка:** Элементы в `Set` обычно не упорядочены; порядок их хранения может не соответствовать порядку добавления.
3. **Равенство элементов:** Равенство элементов определяется через методы `equals` и `hashCode`.

### Основные методы интерфейса Set:

- `add(E e)`: Добавляет указанный элемент в Set (если он ещё не присутствует в коллекции).
- `remove(Object o)`: Удаляет указанный элемент из Set, если он присутствует.
- `contains(Object o)`: Возвращает `true`, если Set содержит указанный элемент.
- `size()`: Возвращает количество элементов в Set.
- `isEmpty()`: Проверяет, пуст ли Set.
- `iterator()`: Возвращает итератор для элементов в Set.
- `clear()`: Удаляет все элементы из Set.

### Основные реализации интерфейса Set:

1. **HashSet:**
  - Основан на хэш-таблице (HashMap).
  - Хорошая производительность: операции `add`, `remove`, и `contains` имеют постоянное время выполнения (в среднем случае).
  - Не гарантирует порядок элементов.

2. **LinkedHashSet:**
  - Сохраняет порядок добавления элементов.
  - Немного медленнее, чем `HashSet` из-за дополнительных затрат на поддержание порядка элементов.

3. **TreeSet:**
  - Реализован в виде красно-черного дерева.
  - Элементы упорядочены в соответствии с их естественным порядком или компаратором, переданным при создании.
  - Операции `add`, `remove`, и `contains` выполняются за время O(log n).

### Когда использовать Set:

- Когда нужно хранить набор уникальных элементов.
- Когда важна производительность при проверке наличия элемента в коллекции.
- Когда не требуется сохранение порядка элементов, можно использовать `HashSet`.
- Когда требуется сохранить порядок вставки, следует использовать `LinkedHashSet`.
- Когда необходим упорядоченный набор данных, следует использовать `TreeSet`.

### Пример использования Set:

```
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Cherry");

// Попытка добавить дублирующийся элемент
boolean isAdded = hashSet.add("Apple"); // вернет false

// Пройтись по элементам
for (String fruit : hashSet) {
    System.out.println(fruit);
}
```

Класс `Collections` также предоставляет статические методы, такие как `unmodifiableSet(Set<? extends T>)`, для создания неизменяемых версий `Set`. Это может быть полезно, когда вы хотите предоставить доступ к своей коллекции, не позволяя изменять её содержимое.

### Что такое хеширование?

Хеширование - это процесс преобразования большого количества данных в меньшее фиксированное количество, обычно в виде целого числа, известного как хеш-код. Этот процесс должен быть быстрым, выполняться за константное время и равномерно распределять входные данные по возможным значениям хеш-кода.

### Зачем нужно хеширование?

Хеширование широко используется для оптимизации поиска и вставки в структурах данных, где важно быстрое получение и хранение данных, например, в хеш-таблицах (как `HashMap` или `HashSet` в Java). Хеш-коды позволяют существенно сократить время поиска элемента, поскольку, зная хеш-код, можно сразу перейти к «кувшину», где хранятся все элементы с этим хеш-кодом, минуя остальные данные.

### Как используется метод `hashCode()`?

В Java метод `hashCode()` определен в классе `Object` и поэтому наследуется всеми объектами. Он используется коллекциями, основанными на хеш-таблицах, как `HashMap`, `HashSet`, и `HashTable`. Когда объект добавляется в такую коллекцию, его хеш-код используется для определения места (т.е. "бакета" или "кувшина"), где он будет храниться. Когда нужно проверить наличие объекта в коллекции или удалить объект, снова вычисляется хеш-код, чтобы найти, где объект может быть расположен.

## Контракт `hashCode()` и `equals()`

Для корректной работы хеш-таблиц есть важное правило — контракт между `hashCode()` и `equals()`, который состоит из следующих условий:

1. Если два объекта равны по методу `equals(Object)`, то их хеш-коды тоже должны быть равны.
2. Если хеш-коды двух объектов различны, то объекты точно не равны (обратное не всегда верно — разные объекты могут иметь одинаковый хеш-код).
3. Вызов метода `hashCode()` должен возвращать одинаковое значение при многократных вызовах на неизменном объекте.

Несоблюдение этих условий может привести к некорректной работе хеш-основанных коллекций. Например, если у двух равных объектов будут разные хеш-коды, они могут быть помещены в разные "бакеты" хеш-таблицы, и это нарушит ожидаемое поведение (например, при поиске один из этих объектов может не быть найден).

---

### SortedSet interface

`SortedSet` — это интерфейс в Java, расширяющий интерфейс `Set` и предоставляющий упорядоченное представление множества. 
Основное отличие `SortedSet` от обычного `Set` заключается в том, что он автоматически поддерживает элементы в отсортированном порядке. 

Это порядок может быть естественным порядком элементов (если элементы реализуют интерфейс `Comparable`) или порядком, заданным компаратором, 
переданным в конструктор `SortedSet`.

### Основные методы `SortedSet`:

- **`comparator()`**: Возвращает компаратор, используемый для упорядочивания элементов в этом множестве, или `null`, если используется естественный порядок.
- **`first()`**: Возвращает первый (наименьший) элемент текущего множества.
- **`last()`**: Возвращает последний (наибольший) элемент текущего множества.
- **`headSet(E toElement)`**: Возвращает представление части множества, элементы которого строго меньше `toElement`.
- **`tailSet(E fromElement)`**: Возвращает представление части множества, элементы которого больше или равны `fromElement`.
- **`subSet(E fromElement, E toElement)`**: Возвращает представление части множества, элементы которого находятся в диапазоне от `fromElement` (включительно) до `toElement` (исключительно).

### Пример использования `SortedSet`:

```
SortedSet<Integer> sortedSet = new TreeSet<>();
sortedSet.add(5);
sortedSet.add(1);
sortedSet.add(3);

System.out.println(sortedSet.first()); // Выводит 1
System.out.println(sortedSet.last()); // Выводит 5
System.out.println(sortedSet.headSet(3)); // Выводит [1]
System.out.println(sortedSet.tailSet(3)); // Выводит [3, 5]
System.out.println(sortedSet.subSet(2, 4)); // Выводит [3]
```

### Реализации `SortedSet`:

Основной реализацией `SortedSet` является класс `TreeSet`, который использует красно-чёрное дерево для хранения элементов. `TreeSet` обеспечивает эффективное выполнение операций добавления, удаления и поиска элементов.
