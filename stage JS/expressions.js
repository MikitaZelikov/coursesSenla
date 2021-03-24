'use strict';
// Записать в коротком виде:

// let a = a + 5; 
function sumSugar(a) {
    console.log(a += 5);
}
sumSugar(0);

// let b = b * 15;
function multSugar(b) {
    console.log(b *= 15);
}
multSugar(1);

// let c = c - 3;
function subSugar(c) {
    console.log(c -= 3);
}
subSugar(3);

// let d = d % 2;
function restSugar(d) {
    console.log(d %= 2);
}
restSugar(7);

// let k = a + k;
function sumShort(a, k) {
    console.log(k += a);
}
sumShort(5, 1);

// let l = l * b;
function multShort(l, b) {
    console.log(l *= b);
}
multShort(5, 6);

// let m = m * 3 * k;
function multiplyShort(m, k) {
    console.log(m *= 3*k);
}
multiplyShort(3, 4);

// Возвести переменную в куб, используя краткую запись.
function cubeSugar(j) {
    console.log(j **= 3);
}
cubeSugar(3);

// Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
function ternaryOperator(x) {
    console.log((x === 'маленький') ? x = 'большой' : x = 'маленький');
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
    console.log(y);
}
compareNull(3);

function compareZero(y) {
    (y < 0) ? y = 'меньше нуля' : (y === 0) ? y = 1 : y *= 10;
    console.log(y);
}
compareZero(5);

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
