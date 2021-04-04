'use strict';
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  /* Создать функцию которая принимает два. Функция проверяет является ли 
  первый элемент родителям для второго элемента isParent(parent, child) => true || false */
  function isParent1(parent, child) {
    console.log('(Задание 1) вариант 1:');
    (parent === child.parentElement) ? console.log('является родителем') : console.log('не является родителем');
  }
  isParent1(document.body.firstElementChild, document.querySelector('article'));

  function isParent2(parent, child) {
    console.log('(Задание 1) вариант 2:');
    (parent.contains(child)) ? console.log('является родителем') : console.log('не является родителем');
  }
  isParent2(document.querySelector('ul'), document.querySelector('a'));

  // Найти элемент который находится перед списком ul
  let res = document.querySelector('ul').previousElementSibling;
  console.log('(Задание 2) Элемент, предшествующий списку <ul>:', res);

  // Найти параграф и получить его текстовые содержимое
  let p = document.querySelectorAll('p')[0];
  let getText = p.textContent;
  console.log('(Задание 3) Текстовое содержимое параграфа:', getText);

  /*  Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов. */
  function returnObjInfo (node) {
    let nodeLocal = node;
    let nodeInfo = {};
    if (nodeLocal instanceof Node) {
      nodeInfo.type = nodeLocal.nodeType;
      nodeInfo.name = nodeLocal.nodeName;
      nodeInfo.childs = nodeLocal.childNodes.length;
      return nodeInfo;
    } else return 'Параметр функции не является DOM-узлом! Задайте параметр корректно!';
  }
  res = returnObjInfo(document.querySelector('p').firstChild);
  console.log('(Задание 4) Информация о DOM-узле:', res);

  // c.
  let ul = document.querySelector('ul');
  ul.className = "list";
  console.log('(Задание 5) Найти список и добавить ему класс "list":', ul);
});
