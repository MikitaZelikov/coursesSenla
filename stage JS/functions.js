'use strict';

let res;

/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль. */
function multiply(...args) {
    if (args.filter(a => typeof(a) !== 'number').length === 0) {
        let total = 1;
        if (args.length === 0) return 0;
        for (let arg of args) {
            total *= arg;
        }
        return total;
    } else return 'Ошибка! Не все параметры функции являются числами!';
}
res = multiply(10, 2, 3, 0.5, 4, -2);
console.log('(Задание 1) Произведение аргументов равно:', res);

// С помощью рекурсии вычислить факториал числа 10.
function recursionFactorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * recursionFactorial(n - 1);
}
res = recursionFactorial(10);
console.log(`(Задание 2) Факториал числа 10 равен:`, res);

// Создать функцию, которая принимает строку и возвращает  перевернутую строку ('test') = 'tset'.
function reverseString(str) {
    if (typeof(str) === 'string') {
        let result = '';
        for (let char = str.length - 1; char >= 0; char--) {
            result += str[char];
        }
        return result;
    } else return 'Ошибка! Параметр функции не является строкой';
}
res = reverseString('Gravity Falls');
console.log(`(Задание 3) Перевернутая строка имеет вид: '${res}'`);

// Написать функцию, которая проверяет является ли слово палиндромом.
function isItPalindrome(str) {
    if (typeof(str) === 'string') {
        for (let i = 0; i <= str.length / 2; i++) {
            if (str[i] === str[str.length - 1 - i]) return `Слово '${str}' является палиндромом`;
            else return `Слово '${str}' не является палиндромом`;
        }
    } else return 'Ошибка! Параметр функции не является строкой';
}
res = isItPalindrome('шалаш');
console.log('(Задание 4) Палиндром или нет:', res);

/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111") */
function getCharCode1(str) {
    if (typeof(str) === 'string') {
        return str.split('').map(a => a.charCodeAt(0)).join(' ');
    } else return 'Ошибка! Параметр функции не является строкой';
}
res = getCharCode1('Run, Forest! Run!');
console.log('(Задание 5) Значение символов строки по Unicode через пробел (вариант 1):', res);

function getCharCode2(str) {
    if (typeof(str) === 'string') {
        let result = `${str.charCodeAt(0)}`;
        for (let i = 1; i < str.length; i++) {
            result += ` ${str[i].charCodeAt(0)}`;
        }
        return result;
    } else return 'Ошибка! Параметр функции не является строкой';
}
res = getCharCode2('Run, Forest! Run!');
console.log('(Задание 5) Значение символов строки по Unicode через пробел (вариант 2):', res);

/* Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') =>
't'
'e'
's'
't'
*/
console.log('(Задание 6) Функция-рекурсия, которая выводит каждый символ строки в консоль:')
function charToConsole(str) {
    if (typeof(str) === 'string') {
        if (str.length === 1) {
            return console.log(str[0]);
        } else {
            console.log(str[0]);
            return charToConsole(str.substring(1));
        }
    } else return 'Ошибка! Параметр функции не является строкой';
}
charToConsole('all day i dream about sport');

/* Создать две функции и дать им осмысленные названия:
  1. первая функция принимает массив и callback, возвращая строку из обработанного массива.
  2. вторая функция (callback) обрабатывает каждый элемент массива */
function unicodeCipherToString(arr, callback) {
    if (Array.isArray(arr) && arr.length > 0) {
        const copyArr = arr.slice(0, arr.length);
        return copyArr.map(callback).join(' ');
    } else console.log('Ошибка! Некорректно заданы параметры функции!');
}
const getUnicodeElements = (a) => {
    return String(a).charCodeAt(0);
};  
res = unicodeCipherToString([1, 2, 3, 4, 5], getUnicodeElements);
console.log('(Задание 7) Выражение элементов массива через юникод с приведением к строке:', res);
