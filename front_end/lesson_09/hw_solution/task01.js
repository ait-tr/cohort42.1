/* 
Задание 1.
Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
Найти максимальное и минимальное значение в массиве. Вывести в консоль. 
*/

const myArray = Array(10); // Создан массив из десяти элементов, каждый из которых равен нулю.
console.log('Изначальный массив: ');
console.log(myArray);
console.log('Длина массива: ' + myArray.length);

let a = myArray.length;

for (let i = 0; i < a; i++) {
    const oldElement = myArray.shift();
    const newElement = myArray.push(Math.ceil(Math.random() * 100));
}

console.log('Обновленный массив: ');
console.log(myArray);
