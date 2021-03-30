'use strict';

let res;

/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль. */
function multiply(...args) {
    let total = 1;
    if (args.length === 0) return 0;
    for (let arg of args) {
        total *= arg;
    }
    return total;
}
res = multiply(10, 2, 3, 0.5, 4, -2);
console.log('Произведение аргументов равно:', res);

// С помощью рекурсии вычислить факториал числа 10.
function recursionFactorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * recursionFactorial(n - 1);
}
res = recursionFactorial(10);
console.log(`Факториал числа 10 равен:`, res);

// Создать функцию, которая принимает строку и возвращает  перевернутую строку ('test') = 'tset'.
function reverseString(str) {
    let result = '';
    for (let char = str.length - 1; char >= 0; char--) {
        result += str[char];
    }
    return result;
}
res = reverseString('Gravity Falls');
console.log(`Перевернутая строка имеет вид: '${res}'`);

// Написать функцию, которая проверяет является ли слово палиндромом.
function isItPalindrome(str) {
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] === str[str.length - 1 - i]) return `Слово '${str}' является палиндромом`;
        else return `Слово '${str}' не является палиндромом`;
    }
}
res = isItPalindrome('шалаш');
console.log(res);

/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111") */
function getCharCode1(str) {
    return str.split('').map(a => a.charCodeAt(0)).join(' ');
}
res = getCharCode1('Run, Forest! Run!');
console.log('Значение символов строки по Unicode:', res);

function getCharCode2(str) {
    let result = `${str.charCodeAt(0)}`;
    for (let i = 1; i < str.length; i++) {
        result += ` ${str[i].charCodeAt(0)}`;
    }
    return result;
}
res = getCharCode2('Run, Forest! Run!');
console.log('Значение символов строки по Unicode:', res);

/* Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') =>
't'
'e'
's'
't'
*/
function charToConsole(str) {
    if (str.length === 1) {
        return console.log(str[0]);
    } else {
        console.log(str[0]);
        return charToConsole(str.substring(1));
    }
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
console.log('Выражение элементов массива через юникод с приведением к строке:', res);
