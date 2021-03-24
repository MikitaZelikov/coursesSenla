'use strict';
let string = 'string test example';

// Получить первую и последнюю букву строки;
console.log(`${string.charAt(0)} & ${string.charAt(string.length - 1 )}`);

// Сделать первую и последнюю буквы в верхнем регистре;
console.log(string[0].toUpperCase() + string.substring(1, string.length - 1) + string[string.length - 1].toUpperCase());

// Найти положение слова string в строке;
console.log(string.indexOf('string'));

// Найти положение второго пробела;
console.log(string.indexOf(' ', string.indexOf(' ') + 1));

// Получить строку со 2-ого символа длинной 6 букв;
console.log(string.split(' ').join('').substr(1, 6));

// Получить строку с 1 по 7 символ;
console.log(`'${string.substr(0, 7)}'`); // кавычки вставил для наглядности, для случая, когда крайний символ - пробел;

// Получить из двух переменных типа number x = 20, y = 21 получить строку '2021';
let x = 20;
let y = 21;
console.log(`${x}${y}`);
