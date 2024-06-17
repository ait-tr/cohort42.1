/* 
Задание 3.
Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. 
Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.
 */

const myArray3 = Array(10);
console.log("Изначальный массив: ");
console.log(myArray3);
console.log("Длина массива: " + myArray3.length);

let b = myArray3.length;

for (let i = 0; i < b; i++) {
    const oldElement = myArray3.shift();
    const element = myArray3.push(Math.floor(Math.random() * 75) + 1);
}
console.log('Обновленный массив: ');
console.log(myArray3);


console.log('Минимальное значение в массиве: ' + Math.min(...myArray3));
console.log('Максимальное значение в массиве: ' + Math.max(...myArray3));
