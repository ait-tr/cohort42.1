## Оценка алгоритмов

**Оценка фактического времени работы программы**.

Этот метод заключается в замере реального времени, которое программа занимает на выполнение задачи.
Предоставляет конкретные цифры времени выполнения, что полезно для реальных приложений.
Но время выполнения сильно зависит от характеристик оборудования (железа) и окружения выполнения (операционной системы, других работающих программ),
что делает результаты менее универсальными и трудными для сравнения.

**Оценка фактического количества примитивных операций**.

Подсчет количества базовых операций (сравнений, присваиваний, обращений к элементам массива), которые выполняет алгоритм.
Это более стабильная метрика, поскольку она не зависит от внешних условий исполнения программы.
Тем не менее результаты зависят от конкретного набора входных данных и могут не отражать общую эффективность алгоритма при разных условиях.

**Асимптотический анализ**.

Оценка скорости роста количества примитивных операций в зависимости от размера входных данных.
Это включает понятие "**О большое**" (**Big-O notation**), которое описывает поведение алгоритма и 
предоставляет общее представление об эффективности, особенно на больших объемах данных.

Каждый из этих методов оценки работы программы имеет свою сферу применения и может быть более или менее подходящим 
в зависимости от конкретных целей анализа и условий, в которых выполняется программа. Важно уметь выбирать подходящий 
метод оценки в зависимости от поставленной задачи и имеющихся условий.

## Big-O нотация

**Big-O нотация** — это математическая нотация, используемая для описания асимптотической сложности алгоритмов.
Это способ выразить, как быстро растёт время выполнения алгоритма или затрачиваемая память в зависимости от размера входных данных.
O-нотация фокусируется **на худшем сценарии** выполнения алгоритма.

### Основные классы сложности

1. **O(1) — постоянная сложность**: Время выполнения алгоритма не зависит от размера входных данных. Например, доступ к элементу массива по индексу в Java:

   ```
   int value = array[index];
   ```

2. **O(log n) — логарифмическая сложность**: Время выполнения увеличивается логарифмически по отношению к размеру входных данных.
Характерный пример — бинарный поиск:

   ```
   int binarySearch(int[] array, int x) {
       int l = 0, r = array.length - 1;
       while (l <= r) {
           int m = l + (r - l) / 2;
           if (array[m] == x)
               return m;
           if (array[m] < x)
               l = m + 1;
           else
               r = m - 1;
       }
       return -1;
   }
   ```

3. **O(n) — линейная сложность**: Время выполнения алгоритма растёт линейно в зависимости от размера входных данных. Пример — простой перебор массива:

   ```
   boolean contains(int[] array, int x) {
       for (int i : array) {
           if (i == x) {
               return true;
           }
       }
       return false;
   }
   ```

4. **O(n log n) — линейно-логарифмическая сложность**: Время выполнения алгоритма растёт быстрее, чем линейно, но медленнее, чем квадратично.
Пример — эффективные алгоритмы сортировки, такие как сортировка слиянием.

5. **O(n²) — квадратичная сложность**: Время выполнения увеличивается квадратично по отношению к размеру входных данных. Характерный пример — вложенные циклы:

   ```
   void printPairs(int[] array) {
       for (int i = 0; i < array.length; i++) {
           for (int j = 0; j < array.length; j++) {
               System.out.println(array[i] + ", " + array[j]);
           }
       }
   }
   ```

### Важные моменты

- **Худший сценарий**: O-нотация обычно рассматривает худший сценарий выполнения алгоритма.
- **Игнорирование констант**: В O-нотации игнорируются константы и менее значимые термины. Например, O(2n) и O(n + 100) оба считаются O(n).
- **Большие размеры данных**: O-нотация особенно полезна для анализа алгоритмов, работающих с большими объёмами данных.

Используя O-нотацию, разработчики могут оценить, насколько хорошо алгоритм будет масштабироваться с увеличением размера входных данных, 
что критически важно при работе с большими объёмами данных.
