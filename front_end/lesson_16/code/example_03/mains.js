const functionExample = (a) => {
    return a + 2;
}


const result = functionExample(10);
console.log(result);
const result2 = functionExample(100);
console.log(result2);


console.log([1 , 3].map(functionExample));
