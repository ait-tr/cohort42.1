/*
Задание 4.
Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. 
Найти сумму всех элементов массива. Вывести в консоль.
*/

const myArray4 = Array(10);
console.log('Изначальный массив: ');
console.log(myArray4);

const c = myArray4.length;

const newArray = [];

for (let i = 0; i < c; i++) {
    let randomNum = Math.ceil(Math.random() * 50);
    const element = newArray.push(randomNum);
}

console.log('Обновленный массив: ');
console.log(newArray);


let sum = 0;
for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
    
}
console.log('Cумма всех элементов массива: ');
console.log(sum);
