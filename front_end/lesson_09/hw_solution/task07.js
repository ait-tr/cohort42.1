/*
Задание 7 (необязательное).
Перевернуть массив (аналог reverse).
*/

const myArray5 = [11, 27, 1985, 2022, 20];
console.log('Изначальный массив: ');
console.log(myArray5);

const myReversedArray = [];

for (let i = myArray5.length - 1; i >= 0; i--) {
    myReversedArray.push(myArray5[i]); 
}

console.log('Перевернутый массив: ');
console.log(myReversedArray);
