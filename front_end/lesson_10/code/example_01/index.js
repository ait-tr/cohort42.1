// functions
// 1. Function declaration

// hoisting
const resultFunctionPrintHello = printHello();
console.log(resultFunctionPrintHello);

function printHello(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

// 2. Function expression

const printHelloAlrernative = function(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

const resultFunctionPrintHelloAlter = printHelloAlrernative();
console.log(resultFunctionPrintHelloAlter);

// 3. Arrow functions
const printHelloArrow = (name) => {
    const fullString = 'Hello ' + name;
    return fullString;
}

const nameJ = "John";
const resultFunctionPrintHelloArrow = printHelloArrow(nameJ);
console.log(resultFunctionPrintHelloArrow);

// сокращение стрелочной функции
const printHelloArrowShort = name => 'Hello ' + name;
console.log(printHelloArrowShort('David'));

