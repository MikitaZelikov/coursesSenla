'use strict';
let string = 'string test example';
let res;

// Получить первую и последнюю букву строки;
let first = string.charAt(0);
let last = string.charAt(string.length - 1 );
console.log(`(Задание 1) Получить первую и последнюю букву строки: первая - ${first}, последняя - ${last}`);

// Сделать первую и последнюю буквы в верхнем регистре;
res = string[0].toUpperCase() + string.substring(1, string.length - 1) + string[string.length - 1].toUpperCase();
console.log('(Задание 2) Сделать первую и последнюю буквы в верхнем регистре:', res);

// Найти положение слова string в строке;
res = string.indexOf('string');
console.log('(Задание 3) Найти положение слова string в строке:', res);

// Найти положение второго пробела;
res = string.indexOf(' ', string.indexOf(' ') + 1);
console.log('(Задание 4) Найти положение второго пробела:', res);

// Получить строку со 2-ого символа длинной 6 букв;
res = string.split(' ').join('').substr(1, 6);
console.log('(Задание 5) Получить строку со 2-ого символа длинной 6 букв:', res);

// Получить строку с 1 по 7 символ;
res = string.substr(0, 7);
console.log(`(Задание 6) Получить строку с 1 по 7 символ: '${res}'`); // кавычки вставил для наглядности, для случая, когда крайний символ - пробел;

// Получить из двух переменных типа number x = 20, y = 21 получить строку '2021';
let x = 20;
let y = 21;
res = x + y.toString();
console.log('(Задание 7) Из двух переменных типа number x = 20, y = 21 получить строку \'2021\':', `${x}${y}`, res);
