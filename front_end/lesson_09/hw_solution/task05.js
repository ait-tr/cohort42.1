/*
Задание 5 (необязательное).
Объявить массив из 5 элементов и заполнить его любыми числами. 
Присвоить 5 переменным значения из массива с помощью деструктуризации.
*/

const myArray5 = [11, 27, 1985, 2022, 20];
console.log('Изначальный массив: ');
console.log(myArray5);


console.log("============== деструктуризация. метод №1 =============");
let firstElement = myArray5[0];
let secondElement = myArray5[1];
let thirdElement = myArray5[2];
let fourthElement = myArray5[3];
let fifthElement = myArray5[4];

console.log(firstElement, secondElement, thirdElement, fourthElement, fifthElement);

console.log("============== деструктуризация. метод №2 =============");
let a;
let b;
let c;
let d;
let e;

[a, b, c, d, e] = [...myArray5];

console.log(a, b, c, d, e);
