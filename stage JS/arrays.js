'use strict';

let res;

// Используя функцию, найти последний элемент массива, не изменяя его.
function getLastElement(arr) {
    let element = arr[arr.length - 1];
    return element;
}
res = getLastElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(`Последний элемент массива: ${res}`);


// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
function dubbedElement(arr) {
    let duplicate = arr.concat(arr);
    return duplicate;
}
res = dubbedElement([1,3,6]);
console.log(res);

// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
function fillInArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
res = fillInArray(7);
console.log(res);

/* Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])" */
function deleteFirstElement(...args) {
    let result = [];
    for (let current = 0; current < args.length; current++) {
        args[current].shift();
        result.push(args[current]);
    }
    return result;
}
res = deleteFirstElement([1, 2, 3], ["x", "y", "z"], [null, undefined, ''], [], ["x"], ["4", "5", "6"], [7, 9, 9], [1, "1", "z"]);
console.log(res);

// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
function sortReverseString(str) {
    const compareFn = (a, b) => {
        a = (a === 'ё') ? 'е'.charCodeAt(0) + 0.5 : a.charCodeAt(0);
        b = (b === 'ё') ? 'е'.charCodeAt(0) + 0.5 : b.charCodeAt(0);
        return b - a;
    };
    return str.split('').sort(compareFn).join('');
}
res = sortReverseString('екважбигёзд');
console.log(res);

// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function sortWaning(arr) {
    return arr.sort((a, b) => b - a );
}
res = sortWaning([5, 2, -1, 6, 9, -9, 3]);
console.log(res);

/* Создать функцию, которая принимает 3 аргумента: любой произвольный массив, начальный номер элемента в массиве, конечный номер. 
Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) 
(getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы. */
function getNewArray(a, b, c) {
    return a.slice(b, c + 1);
}
res = getNewArray([1, 2, 3, 4, 5, 6], 1, 3);
console.log(res);

// Удвоить элементы массива, не используя циклы.
function doubledElements(arr) {
    return arr.map(x => x * 2);
}
res = doubledElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
function deleteSomeElements(arr) {
    arr.splice(1, 2);
    return arr;
}
res = deleteSomeElements([1, 2, 3, 4, 5]);
console.log(res);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
function changeSomeElements(arr) {
    arr.splice(1, 2, 'три', 'четыре');
    return arr;
}
res = changeSomeElements([1, 2, 3, 4, 5]);
console.log(res);

// Вставить в произвольный массив любое значение после второго элемента.
function pasteElement(arr) {
    arr.splice(2, 0, 'anyElement');
    return arr;
}
res = pasteElement([1, 2, 3, 4, 5, 6, 7]);
console.log(res);

// Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной.
function sortSinceShort(arr) {
    arr.sort((a, b) => a.length - b.length);
    return arr;
}
res = sortSinceShort([[1], [1, 2, 3, 4, 5], [1, 2], [1, 2, 3, 4], [1, 2, 3]]);
console.log(res);

// Создать копию произвольного массива.
function randomCopy(arr) {
    return arr.slice(0, arr.length);
}
res = randomCopy([1, 'hi', null, true, '32', undefined, 'wow']);
console.log(res);

/* Отсортировать массив объектов по возрастающему количеству ног животных:
[
  {kind: "tarantula", info: {legs: 8, eyes: 8}},
  {kind: "french bulldog", info: {legs: 4, eyes: 2}},
  {kind: "human", info: {legs: 2, eyes: 2}},
  {kind: "lobster", info: {legs: 10, eyes: 2}},

] */
function sortQuantityLegs(arr) {
    return arr.sort((a, b) => a.info.legs - b.info.legs);
}
res = sortQuantityLegs([
    {kind: "tarantula", info: {legs: 8, eyes: 8}},
    {kind: "french bulldog", info: {legs: 4, eyes: 2}},
    {kind: "human", info: {legs: 2, eyes: 2}},
    {kind: "lobster", info: {legs: 10, eyes: 2}},
]);
console.log(res);

/* Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает 
все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. */
const services = [
    {service: "service1", executionTime: 56},
    {service: "service2", executionTime: 97},
    {service: "service3", executionTime: 23},
    {service: "service4", executionTime: 65},
    {service: "service5", executionTime: 2},
    {service: "service6", executionTime: 73},
    {service: "service7", executionTime: 82},
    {service: "service8", executionTime: 19},
    {service: "service9", executionTime: 33},
    {service: "service10", executionTime: 42},
];
function filterServices(arr, x, y) {
    return arr.sort((a, b) => a.executionTime - b.executionTime).filter((c) => c.executionTime >= x && c.executionTime <= y);
}
res = filterServices(services, 20, 60);
console.log(res);