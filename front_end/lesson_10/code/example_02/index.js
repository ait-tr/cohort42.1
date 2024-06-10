const powNumberArrow = (num, powN) => Math.pow(num, powN);
console.log(powNumberArrow(5, 2));

// функция, которая использует другие функции

const makeOperations = (a, b) => {
  function sumOfNumbers(a, b) {
    return a + b;
  }
  console.log('Сумма наших чисел = ' + sumOfNumbers(a, b));
};

makeOperations(7, 3);

const makeOperations2 = (a, b) => {
  console.log('Сумма наших чисел = ' + sumOfNumbers(a, b));
};

makeOperations2(7, 4);

// callback функции

const makeOperationsWithCallBack = (a, b, operation1) => {
  return operation1(a, b);
};

console.log(makeOperationsWithCallBack(5, 3, sumOfNumbers));

// напишем функцию, которая принимает 2 числа, и две колбек функции.
// функция которая возваращает сумму чисел
// функция которая возвращает возведение в степень
// результат выполнения функции:
// Сумма чисел =
// Число а в степени б =

// function sumOfNumbers(a, b) {
//     return a + b;
// }

// const powNumberArrow = (num, powN) => Math.pow(num, powN);

// Решение

function sumOfNumbers(a, b) {
    return a + b;
  }

const powNumberArrow2 = (num, powN) => Math.pow(num, powN);

const callBackOperation = (a, b, x, y) => {
  console.log(x(a, b));
  console.log(y(a, b));
};

// можно так -
callBackOperation(5, 8, sumOfNumbers, powNumberArrow2);
// а можно так -
callBackOperation(
  5,
  9,
  (l, m) => {
    return l + m;
  },
  (num, powN) => Math.pow(num, powN)
);


// Last task for today
// функция принимает как аргумент массив и колбек функцию
// возвращает массив такой же длины, где каждый элемент это результат вызова 
// колбек функции с аналогичным элементом

const arr = [2, 3, 5, 10];
const callFunk = a => a * 5;

const callBackArray = (arr, operation) => {
    const newArr = [];
    for(i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
}
console.log(callBackArray(arr, callFunk));
