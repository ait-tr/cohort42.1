
const exampleFunc = (a) => {
    return a/2;
}

function arrExample2(a) {
}

const arrExample3 = function(a, exampleFunc) {
   return exampleFunc(a);
}
exampleFunc(4);


// ## Задание 2. Стрелочная ф-ция возводящая число в квадрат

// Создайте ф-цию, которая возвращает квадрат числа

// 1. Функция должна принимать целое число
// 2. Если число не целое - скруглить его в меньшую сторону
// 3. Функция должна вернуть квадрат этого числа

const arrIn = [1, 3, 5, 7];

const power = (y) => {
    y = Math.floor(y);
    return y*y;
}

// написать функцию, которая принимает массив, и колбек функцию для обработки элементов массива

const changeArray = (arr, callB) => {
    console.log(arr);
    console.log(callB);
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(callB(arr[i]));
    }
    return newArray;
}
console.log(changeArray(arrIn, power));



