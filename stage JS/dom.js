'use strict';
/* Получить и вывести в консоль:
 1. head
 2. body
 3. все дочерние элементы body
 4. первый div и все его дочерние узлы
  4.1 вывести все дочерние узлы в консоль 
  4.2 вывести все дочерние узлы в консоль кроме первого */
  
// 1, 2
console.log('(Задание 1):', document.head);
console.log('(Задание 2):', document.body);


// 3
console.log('(Задание 3) Дочерние элементы <body>:\n', document.body.children);

// 4
let firstDiv = document.body.firstElementChild;
let firstDivChilds = firstDiv.childNodes;
console.log('(Задание 4) Первый <div>:\n', firstDiv , '\nВсе дочерние узлы первого <div>:\n', firstDivChilds);

// 4.1
let res = '';
for (let child of firstDivChilds) {
    res += `\n <${child.nodeName}>`;
}
console.log('(Задание 4.1) Дочерние узлы первого <div>:', res);
  
// 4.2
let total = '';
for (let child = 1; child < firstDivChilds.length; child++) {
    total += `\n <${firstDivChilds[child].nodeName}>`;
}
console.log('(Задание 4.2) Дочерние узлы первого <div>, начиная со второго:', total);