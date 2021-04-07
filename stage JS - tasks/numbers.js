'use strict';
// Получить число Pi из Math и округлить его до двух знаков после точки;
let Pi = +Math.PI.toFixed(2);
let PI = Math.round(Math.PI * 100) / 100;
console.log('(Задание 1) Округлить число ПИ до двух знаков после точки (вариант 1):', Pi);
console.log('(Задание 1) Округлить число ПИ до двух знаков после точки (вариант 2):', PI);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1;
let max = Math.max(10, 17, 5, 12, 15, 99, 1);
let min = Math.min(10, 17, 5, 12, 15, 99, 1);
console.log(`(Задание 2) Max и Min значения из представленного ряда (вариант 1): max: ${max}; min: ${min}`);

function getMaxMin(...args) {
    let Max = args.sort((a, b) => b - a)[0];
    let Min = args.sort((a, b) => a - b)[0];
    return console.log(`(Задание 2) Max и Min значения из представленного ряда (вариант 2): max: ${Max}; min: ${Min}`)
}
getMaxMin(10, 17, 5, 12, 15, 99, 1);

// С помощью Math.random получить случайное число и округлить его до двух цифр после запятой;
let random = +Math.random().toFixed(2);
console.log(`(Задание 3) Получить случайное число и округлить его до двух цифр после запятой: ${random}`);

// С помощью Math.random получить случайное число от 0 до Х;
function randomDiapason(x) {
    return Math.random() * x;
}
let res = randomDiapason(15);
console.log('(Задание 4) Получить случайное число от 0 до Х:', res);

function randomDiapason1(from, to) {
    return Math.random() * (to - from) + from;
}
res = randomDiapason1(5, 15);
console.log('(Задание 4) Получить случайное число от X до Y:', res);

// Получить число из строки '100$';
let parse = parseInt('100$', 10);
console.log('(Задание 5) Получить число из строки \'100$\':', parse);