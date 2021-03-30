'use strict';
let res;
// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре".
function upperFirst(str) {
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i - 1] === ' ') {
            resultStr += str[i].toUpperCase();
        } else {
            resultStr += str[i];
        }
    }
    return resultStr;
}
res = upperFirst("Я стану крутым программистом");
console.log(res);

// Вычислить факториал числа 9.
function factorial(x) {
    let resultFact = 1;
    for (let i = 1; i <= x; i++) {
        resultFact *= i;
    }
    return resultFact;
}
res = factorial(9);
console.log(res);

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1".
function createString(str) {
    let resultStr = str;
    for (let j = 10; j > 0; j--) {
        if (j == 1) {
            resultStr += ` ${j}.`;
        } else {
            resultStr += ` ${j},`;
        }
    }
    return resultStr;
}
res = createString("Просветление наступит через:");
console.log(res);

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
function odd(y) {
    let result = 'Нечетные числа: ';
    for (let k = 0; k <= y; k++) {
        if (k % 2 != 0 && k < y - 1) {
            result +=  `${k}, `;
        } else if (k % 2 != 0 && k >= y - 1) {
            result +=  `${k}. `;
        }
    }
    return result;
}
res = odd(20);
console.log(res);

/* На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут 
в верхнем регистре и будут отсутствовать пробелы. */
function stringCamelCase(str) {
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        } else if (i == 0 || str[i - 1] === ' ') {
            resultStr += str[i].toUpperCase();
        } else resultStr += str[i];
    }
    return resultStr;
}
res = stringCamelCase('теперь я мастер циклов javascript');
console.log(res);