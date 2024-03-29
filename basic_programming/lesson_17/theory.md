## Инкапсуляция

**Инкапсуляция** является одним из основных принципов объектно-ориентированного программирования (ООП), 
обеспечивающим сокрытие внутренней реализации класса от внешнего мира, а также интеграцию данных (состояния) и кода (поведения), 
которые манипулируют этими данными, в единую структурную единицу — класс. Этот принцип направлен на упаковку данных и методов, работающих с данными, 
внутри класса и на ограничение доступа к ним из других частей программы для предотвращения нежелательного вмешательства или ошибочного использования.

### Основные цели инкапсуляции

**Сокрытие внутренней реализации класса**: 
Инкапсуляция позволяет скрыть детали реализации класса, предоставляя внешнему коду только необходимый интерфейс для взаимодействия с объектом. 
Это означает, что изменения внутренней реализации класса не будут иметь прямого влияния на код, который использует этот класс, 
что упрощает модификацию и развитие программы.

**Защита данных**: 
Инкапсуляция защищает состояние объекта от прямого доступа и модификации извне, позволяя изменять данные объекта только через его методы. 
Это помогает предотвратить неправомерное использование объектов и обеспечивает корректность данных, так как доступ к изменению полей объекта 
может быть строго контролируем через методы, которые могут включать проверки валидности и корректности данных.

В Java инкапсуляция достигается за счет использования модификаторов доступа (например, **private**, **public** и **protected**) для полей, 
методов и конструкторов. Поля класса обычно объявляются как private, что ограничивает их прямой доступ из других классов, а доступ к этим 
полям обеспечивается через публичные методы — **геттеры** (для чтения данных) и **сеттеры** (для изменения данных). Это позволяет осуществлять 
контролируемый доступ к внутреннему состоянию объекта, а также предоставлять к нему ограниченный интерфейс для взаимодействия.

### Приватные поля

Использование модификатора доступа **private** является фундаментальным механизмом для защиты внутреннего состояния объектов. 
Применение **private** к полям класса ограничивает доступ к этим полям, делая их недоступными для чтения или изменения напрямую 
из кода за пределами класса. Такой подход позволяет разработчикам контролировать взаимодействие с внутренними данными объекта.

### Приватные методы

Модификатор доступа **private** играет важную роль не только в защите полей класса, но и в ограничении доступа к его методам, 
делая их недоступными для вызова вне класса. Это позволяет "спрятать" вспомогательные или внутренние методы, которые предназначены 
для использования только в рамках самого класса. Такой подход способствует  модульности кода, позволяя скрыть детали реализации и 
выделить публичный интерфейс класса для взаимодействия с внешним кодом.

### Геттеры

Использование модификатора **private** для полей предотвращает несанкционированное изменение или чтение данных объекта, 
что может привести к некорректному поведению программы. Однако, для обеспечения возможности чтения этих скрытых данных, 
без предоставления возможности их изменения, применяются специальные методы доступа, известные как **геттеры** (getters).

## Сеттеры

Так же, как и методы для чтения данных (**геттеры**), используются методы для их изменения, называемые **сеттерами** (setters). 
Эти методы позволяют обновлять значения полей объекта, при этом предоставляя возможность для выполнения дополнительных проверок 
корректности предоставляемых значений, тем самым обеспечивая целостность и корректность состояния объекта.
