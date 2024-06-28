fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
    
    const slicedData = data.slice(10, 15);

    const formattedData = slicedData.map((item, index) => ({
        id: item.id,
        index: index + 1,
        title: item.title,
        completed: item.completed
    }));

    const todoContainer = document.getElementById('todo-container');

            formattedData.forEach(item => {
                const todoItem = document.createElement('div');
                todoItem.className = `todo-item ${item.completed ? 'completed' : 'not-completed'}`;
                todoItem.innerHTML = `<strong>${item.index}.</strong> ${item.title} (ID: ${item.id})`;
                todoContainer.appendChild(todoItem);
})})

.catch(error => {
    console.error('Ошибка при загрузке данных:', error);
});