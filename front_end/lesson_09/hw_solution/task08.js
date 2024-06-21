/* 
Задание 8 (необязательное).
Проверить является ли строка палиндромом.
*/

let text = 'Мокнет Оксана с котенком!';
console.log('Оригинальный текст: ' + '"' + text + '"');

let splitedText = text.replaceAll(/[&\/\\#, +=()$~%.'":*!?<>{}]/g, '').toLowerCase();
// console.log(splitedText);


let reversedTest;
function reverse(str){
    reversedTest = str.split(/(?:)/u).reverse().join("");
    return reversedTest; 
}
reverse(splitedText);
// console.log(reversedTest);

if (splitedText === reversedTest) {
    console.log('"' + text + '"' + " - строка является палиндромом");
} else {
    console.log('"' + text + '"' + " - строка НЕ является палиндромом");
}
