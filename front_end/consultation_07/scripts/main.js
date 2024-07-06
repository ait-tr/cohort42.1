const func01 = async () => {
    console.log('Вывод перед фетчем');
    // функция должна возвращать промис
    const fetchRes = await fetch('https://jsonplaceholder.typicode.com/todos');

    console.log(fetchRes); 
    // fetchRes.then((resultOfPromiseLogic) => console.log(resultOfPromiseLogic));
    // console.log(fetchRes);
    return fetchRes;
}

// func01();
const resultOfFunc01 = func01(); // результат выполнения асинхронной функции = промис
// console.log(resultOfFunc01);
resultOfFunc01.then((res) => console.log(res)); // соответсвенно мы работаем с ним как с промисом
// console.log('Синхронный код');



// пишем асинхронную функцию == = ==
const nextAsycnFunction = async(anyPromise) => {
    const resultOfAnyPromise = await anyPromise;
    console.log(resultOfAnyPromise);
}

// продолжение, новый промис
const newPromise = fetch('https://jsonplaceholder.typicode.com/users');

// variant 1
nextAsycnFunction(newPromise);

// variant 2
newPromise.then((r) => console.log(r));
