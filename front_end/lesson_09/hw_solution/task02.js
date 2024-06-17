/* 
Задание 2.
Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива. 
*/

const myArray2 = ['firstElement', 2, 3, [11, 8], { birthday: 1985 }, 6, 7, 8, 9, 10];
console.log('Изначальный массив: ');
console.log(myArray2);
console.log('Длина массива: ' + myArray2.length);

const firstElement = myArray2[0];
console.log('Первый элемент массива: ' + firstElement);

const lastElement = firstElement;
myArray2.push(lastElement);
myArray2.shift(firstElement);

console.log('Обновленный массив: ' + myArray2);
