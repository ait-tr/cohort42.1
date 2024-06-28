let todoList = [
    // { task: "Купить молоко", done: false },
    // { task: "Заплатить за интернет", done: true },
    // { task: "Позвонить маме", done: false },
    // { task: "Почитать книгу", done: false },
    // { task: "Сделать домашнее задание", done: true },
    // { task: "Посмотреть фильм", done: false },
    // { task: "Помыть посуду", done: true },
    // { task: "Погулять с собакой", done: false },
    // { task: "Заказать пиццу", done: false },
    // { task: "Посетить врача", done: true },
    // { task: "Починить компьютер", done: false },
    // { task: "Подарить цветы подруге", done: true },
    // { task: "Поиграть в видеоигры", done: false },
    // { task: "Послать резюме", done: true },
    // { task: "Поехать в отпуск", done: false }
];

// Функция для вывода списка дел на страницу
function core(arrList) {
    const list = document.querySelector('.list');
    list.innerHTML = ''; // очищаем старый массив

    const createElem = arrList.map((list, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${list.task}`;
        listItem.classList.add('list-item');
        if (list.done) {
            listItem.classList.add('list-item_done');
        }
        listItem.addEventListener('click', () => {
            list.done = !list.done;
            listItem.classList.toggle('list-item_done');
        });
        return listItem;
    });

    createElem.forEach(listItem => {
        list.appendChild(listItem);
    });
}

// Инициализируем начальный список
core(todoList);

// Fetch-запрос для получения данных и их интеграции в основной массив
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const fetchedData = data.slice(0, 10).map(item => ({
        task: item.title,
        done: item.completed
    }));

    todoList = [...todoList, ...fetchedData];
    core(todoList);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });

// Кнопка "Создать"
const btnCreate = document.querySelector('#create');
const inputTask = document.querySelector('.task-input');

const btnClickCreate = () => {
    const textFromInput = inputTask.value;
    todoList.unshift({ task: textFromInput, done: false });
    core(todoList);
}
btnCreate.addEventListener('click', btnClickCreate);

// Фильтры
const btnAll = document.querySelector('#all');
const btnCompleted = document.querySelector('#completed');
const btnUnCompleted = document.querySelector('#uncompleted');

btnAll.addEventListener('click', () => core(todoList));
btnCompleted.addEventListener('click', () => {
    const filterCompleted = todoList.filter(task => task.done);
    core(filterCompleted);
});
btnUnCompleted.addEventListener('click', () => {
    const filterUnCompleted = todoList.filter(task => !task.done);
    core(filterUnCompleted);
});