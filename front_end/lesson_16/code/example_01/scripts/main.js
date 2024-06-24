
// запуск ожидания клика
const ourButton = document.querySelector('#btn');
ourButton.addEventListener('click', () => {console.log('Button pressed')});

//prompt('kfjdsla');


// цикл на 5 секунд
//const startTime = new Date();
// for (let i = 0; i < 7000000000; i++) {

// }
// const endTime = new Date();
// console.log(endTime - startTime);

// setTimeout
setTimeout(()=>{console.log('timeout 4000')}, 4000);
setTimeout(()=>{console.log('timeout 0')}, 0);


for (let i = 0; i < 7000000000; i++) {

}

console.log('Console after setTimeout');
