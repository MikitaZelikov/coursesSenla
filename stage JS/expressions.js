'use strict';
// Записать в коротком виде:
let param;

// let a = a + 5; 
function sumSugar(a) {
    console.log(`a = a + 5 в коротком виде a += 5, при a = ${param}, выражение равно`, a += 5);
}
param = 0;
sumSugar(param);

// let b = b * 15;
function multSugar(b) {
    console.log(`b = b * 15 в коротком виде b *= 15, при b = ${param}, выражение равно`, b *= 15);
}
param = 1;
multSugar(param);

// let c = c - 3;
function subSugar(c) {
    console.log(`c = c - 3 в коротком виде c -= 3, при c = ${param}, выражение равно`, c -= 3);
}
param = 3;
subSugar(param);

// let d = d % 2;
function restSugar(d) {
    console.log(`d = d % 2 в коротком виде d %= 2, при d = ${param}, выражение равно`, d %= 2);
}
param = 11;
restSugar(param);

// let k = a + k;
function sumShort(a, k) {
    console.log(`k = a + k в коротком виде k += a, при a = ${x}, k = ${y}, выражение равно`, k += a);
}
let x = 5;
let y = 1;
sumShort(x, y);

// let l = l * b;
function multShort(l, b) {
    console.log(`l = l * b в коротком виде l *= b, при l = ${i}, b = ${j}, выражение равно`, l *= b);
}
let i = 5;
let j = 1;
multShort(i, j);

// let m = m * 3 * k;
function multiplyShort(m, k) {
    console.log(`m = m * 3 * k в коротком виде m *= 3*k, при m = ${q}, k = ${s}, выражение равно`, m *= 3*k);
}
let q = 3;
let s = 4;
multiplyShort(q, s);

// Возвести переменную в куб, используя краткую запись.
function cubeSugar(j) {
    console.log(`Краткая запись переменной в кубе имеет вид j **= 3, при j = ${f}, выражение равно`, j **= 3);
}
let f = 3;
cubeSugar(f);

// Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
function ternaryOperator(x) {
    console.log('Присвоение с использованием тернарного оператора:', (x === 'маленький') ? x = 'большой' : x = 'маленький');
}
ternaryOperator('small');

/*Записать условие, используя условный оператор if: 
если переменная меньше нуля: присвоить ей строку “меньше нуля”,
если переменная равна нулю: присвоить 1,
если больше нуля: используя краткую запись, умножить переменную на 10.
Сделать тоже самое, используя тернарный оператор.*/
function compareNull(y) {
    if (y < 0) {
        y = 'меньше нуля';
    } else if (y === 0) {
        y = 1;
    } else {
        y *= 10;
    }
    console.log('Присвоение с использованием цикла if:', y);
}
compareNull(3);

function compareZero(y) {
    (y < 0) ? y = 'меньше нуля' : (y === 0) ? y = 1 : y *= 10;
    console.log('То же с использованием тернарного оператора:', y);
}
compareZero(3);

/*Используя конструктор switch, записать следующее условие:
if(a == 'котик') {
  console.log('котик');
} else if(a == 'собака') {
  console.log('собака');
} else if(a == 'хомячок') {
  console.log('хомячок');
} else {
  console.log('неизвестное науке животное');
} */
function whatAnimal(a) {
    switch(a) {
        case 'котик':
            console.log('котик');
            break;
        case 'собака':
            console.log('собака');
            break;
        case 'хомячок':
            console.log('хомячок');
            break;
        default:
            console.log('неизвестное науке животное');
            break;   
    }
}
whatAnimal('whale');
