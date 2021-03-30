'use strict';
// Получить число Pi из Math и округлить его до двух знаков после точки;
console.log(+Math.PI.toFixed(2));
console.log(Math.round(Math.PI * 100) / 100);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1;
console.log(`max: ${Math.max(10, 17, 5, 12, 15, 99, 1)}; min: ${Math.min(10, 17, 5, 12, 15, 99, 1)}`);

// С помощью Math.random получить случайное число и округлить его до двух цифр после запятой;
console.log(+Math.random().toFixed(2));

// С помощью Math.random получить случайное число от 0 до Х;
function randomDiapason(x) {
    return Math.random() * x;
}
let res = randomDiapason(15);
console.log(res);

// Получить число из строки '100$';
console.log(parseInt('100$', 10));