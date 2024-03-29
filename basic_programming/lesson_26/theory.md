## Абстрактные классы

Абстрактный класс похож на обычный класс. В абстрактном классе также можно определить поля и методы, 
но в то же время **нельзя создать объект или экземпляр абстрактного класса**.

**Абстрактный класс** — это максимально абстрактная, о-о-о-чень приблизительная «заготовка» для группы будущих классов. 
Но она описывает некое общее состояние и поведение, которым будут обладать будущие классы — наследники абстрактного класса.
Абстрактные классы призваны предоставлять базовый функционал для классов-наследников. 
А производные классы уже реализуют этот функционал.

При определении абстрактных классов используется ключевое слово `abstract`.

Кроме обычных методов абстрактный класс может содержать абстрактные методы.
Такие методы определяются с помощью ключевого слова `abstract` и не имеют никакой реализации:

```
abstract class Animal {
    abstract void info();
}
```

Производный класс обязан переопределить и реализовать все абстрактные методы, которые имеются в базовом абстрактном классе.
Также следует учитывать, что если класс имеет хотя бы один абстрактный метод, то данный класс должен быть определен как абстрактный.

Подробнее: статья [Что такое абстрактные классы и методы в Java](https://habr.com/ru/companies/piter/articles/738508/)