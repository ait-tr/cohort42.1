## Интерфейсы

Механизм наследования очень удобен, но он имеет свои ограничения. В частности мы можем наследовать только от одного класса.

В языке Java подобную проблему частично позволяют решить **интерфейсы**. Интерфейсы определяют некоторый функционал, не имеющий конкретной реализации, 
который затем реализуют классы, использующие эти интерфейсы. Ключевое отличие от наследования - один класс может реализовать множество интерфейсов.

**Интерфейс** – это ссылочный тип в Java. Он схож с классом. Это совокупность абстрактных методов.
Класс реализует интерфейс, таким образом наследуя абстрактные методы интерфейса.

Написание интерфейса схоже с написанием абстрактного класса. Но класс описывает состояние и поведение объекта.
А интерфейс **описывает поведение**, которые затем реализует класс.

Если класс, реализующий интерфейс, не является абстрактным, **все методы интерфейса должны быть определены в классе**.

Вместе с абстрактными методами интерфейс в Java может содержать константы, обычные методы, статические методы и вложенные типы.

Для объявления интерфейса используется ключевое слово `interface`.

```
public interface Printable {
    void print();
}
```

```
public class Book implements Printable {

    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public void print() {
        System.out.printf("Book: %s (%s)\n", title, author);
    }
}
```

Интерфейсы имеют следующие свойства:

- Интерфейс абстрактный по умолчанию. Вам не нужно использовать ключевое слово abstract во время объявления интерфейса. 
- Каждый метод в интерфейсе абстрактный, поэтому ключевое слово abstract не нужно. 
- Методы в интерфейсе публичны.

### Реализация интерфейса

Когда класс реализует интерфейс, вы можете представить себе, что класс словно **подписывает контракт** с интерфейсом,
соглашаясь совершить конкретные его поведения. Если класс не исполняет все поведения интерфейса, 
то класс должен объявить себя абстрактным.

Класс использует ключевое слово `implements` для реализации интерфейса.

### Расширение (наследование) интерфейсов

Интерфейс может расширять другой интерфейс так же, как класс другой класс. Ключевое слово `extends` используется для расширения интерфейса, 
и дочерний интерфейс наследует методы родительского интерфейса.

### Методы по умолчанию

Ранее до JDK 8 при реализации интерфейса мы должны были обязательно реализовать все его методы в классе.
А сам интерфейс мог содержать только определения методов без конкретной реализации.
В JDK 8 была добавлена такая функциональность как **методы по умолчанию**. 
И теперь интерфейсы кроме определения методов могут иметь их реализацию по умолчанию, которая используется, если класс, 
реализующий данный интерфейс, не реализует метод.

Например, создадим метод по умолчанию в интерфейсе Printable:

```
public interface Printable {
    default void print(){
        System.out.println("Undefined printable");
    }
}
```

Метод по умолчанию - это обычный метод без модификаторов, который помечается ключевым словом `default`.
Затем в классе нам необязательно этот метод реализовать, хотя мы можем его и переопределить.

### Статические методы

Начиная с JDK 8 в интерфейсах доступны статические методы - они аналогичны методам класса.
Чтобы обратиться к статическому методу интерфейса также, как и в случае с классами, пишут название интерфейса и метод.

### Приватные методы

По умолчанию все методы в интерфейсе фактически имеют модификатор public.
Однако начиная с Java 9 мы также можем определять в интерфейсе методы с модификатором private.
Они могут быть статическими и нестатическими, но они не могут быть переопределены в классе.

### Константы в интерфейсах

Кроме методов в интерфейсах могут быть определены статические константы:

```
interface Statusable {
    int OPEN = 1;
    int CLOSE = 0;
    void printStatus(int status);
}

public class Shop implements Statusable{
    @Override
    public void printStatus(int status) {
        if (status == OPEN){
            System.out.println("Status: Open");
        } else if (status == CLOSE) {
            System.out.println("Status: Close");
        } else {
            System.out.println("Status incorrect");
        }
    }
}
```

### Множественная реализация интерфейсов

Если нам надо применить в классе несколько интерфейсов, то они все перечисляются через запятую после слова `implements`.
