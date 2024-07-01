/*
Задание 6.
Разбить строку:
"Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
на слова и вывести в консоль по одному слову в строке.
*/

const text = 'Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.';
console.log('Оригинальный текст: ' + text);

console.log('Разбили на строки внутри массива: ');
const splitInLines = text.replace(',', '').replace('.', '').replace(':', '');
const lines = splitInLines.split(' ');
console.log(lines);

console.log('Разбили на строки: ');
for (let i = 0; i < lines.length; i++) {
   console.log(lines[i]);
}