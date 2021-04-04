'use strict';

let res;

// Используя функцию, найти последний элемент массива, не изменяя его.
function getLastElement(arr) {
    if (Array.isArray(arr) && arr.length >= 1) {
        let element = arr[arr.length - 1];
        return element;
    } else return 'Ошибка! Некорректный параметр у функции!';
}
res = getLastElement([1, '1', null]);
console.log(`(Задание 1) Последний элемент массива: ${res}`);

// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
function dubbedElement(arr) {
    if (Array.isArray(arr)) {
        let duplicate = arr.concat(arr);
        return duplicate;
    } else return 'Ошибка! Некорректный параметр у функции!';
}
res = dubbedElement([1, 3, 6]);
console.log('(Задание 2) Массив с дублированными элементами:', res);

// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
function fillInArray(n) {
    if (typeof(n) === 'number') {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    } else return 'Ошибка! Параметр функции не является числом!'
}
res = fillInArray(7);
console.log('(Задание 3) Массив, заполненный числами от 1 до n:', res);

/* Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])" */
function deleteFirstElement(...args) {
    let localParam = args.slice(0, args.length);
    if (localParam.filter(a => !Array.isArray(a)).length === 0) {
        let result = [];
        for (let current = 0; current < localParam.length; current++) {
            localParam[current].shift();
            result.push(localParam[current]);
        }
        return result;
    } else return 'Ошибка! Один из параметров функции - не массив!';
}
res = deleteFirstElement([1, 2, 3], ["x", "y", "z"], [null, undefined, ''], [], ["x"], [["4"], "5", "6"], [{size: 48}, 9, {weight: 77}]);
console.log('(Задание 4) Массив оставшихся значений:', res);

// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
function sortReverseString(str) {
    if (typeof(str) === 'string') {
        const compareFn = (a, b) => {
            a = (a === 'ё') ? 'е'.charCodeAt(0) + 0.5 : a.charCodeAt(0);
            b = (b === 'ё') ? 'е'.charCodeAt(0) + 0.5 : b.charCodeAt(0);
            return b - a;
        };
        return str.split('').sort(compareFn).join('');
    } else return 'Ошибка! Неправильный тип данных у параметра функции!';
}
res = sortReverseString("екважбигёзд");
console.log('(Задание 5) Буквы строки в обратном алфавитном порядке:', res);

// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function sortWaning(arr) {
    if (Array.isArray(arr)) {
        let localParam2 = arr.slice(0, arr.length);
        return localParam2.sort((a, b) => b - a );
    } else return 'Ошибка! Параметр функции не является массивом!';
}
res = sortWaning([5, 2, -1, 6, 9, -9, 3]);
console.log('(Задание 6) Массив, отсортированный в обратном порядке:', res);

/* Создать функцию, которая принимает 3 аргумента: любой произвольный массив, начальный номер элемента в массиве, конечный номер. 
Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) 
(getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы. */
function getNewArray(a, b, c) {
    if (Array.isArray(a) && typeof(b) === 'number' && typeof(c) === 'number' && b < c && c < a.length) {
        return a.slice(b, c + 1);
    } else return 'Ошибка! Некорректно указаны параметры функции!';
}
res = getNewArray([0, 1, 2, 3, 4, 5, 6], 2, 6);
console.log('(Задание 7) Часть массива, границы которой соответствуют заданным параметрам функции:', res);

// Удвоить элементы массива, не используя циклы.
function doubledElements(arr) {
    if (Array.isArray(arr)) {
        return arr.map(funcDouble);
    } else return 'Ошибка! Параметр функции не является массивом!';
}
let funcDouble = (x) => {
    if (Array.isArray(x)) {
        return x.map(funcDouble);
    } else return x += x;
};
res = doubledElements([1, null, '3', 'df', undefined, 0, {age: 33}, true, [2, '5', 'ma', [4, '6']]]);
console.log('(Задание 8) Массив с удвоенными элементами:', res);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
function deleteSomeElements(arr) {
    if (Array.isArray(arr) && arr.length > 2) {
        let localParam = arr.slice(0, arr.length);
        localParam.splice(1, 2);
        return localParam;
    } else return 'Ошибка! Некорректно задан параметр функции!';
}
res = deleteSomeElements([1, 2, 3, 4, 5]);
console.log('(Задание 9) Массив без второго и третьего элементов:', res);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
function changeSomeElements(arr) {
    if (Array.isArray(arr) && arr.length > 2) {
        let localParam = arr.slice(0, arr.length);
        localParam.splice(1, 2, 'три', 'четыре');
        return localParam;
    } else return 'Ошибка! Некорректно задан параметр функции!';
}
res = changeSomeElements([1, 2, 3, 4, 5]);
console.log('(Задание 10) Массив, в котором второй и третий элементы заменены на “три” и “четыре”:', res);

// Вставить в произвольный массив любое значение после второго элемента.
function pasteElement(arr) {
    if (Array.isArray(arr) && arr.length >= 2) {
        let localParam = arr.slice(0, arr.length);
        localParam.splice(2, 0, 'anyElement');
        return localParam;
    } else return 'Ошибка! Некорректно задан параметр функции!';
}
res = pasteElement([1, 2, 3]);
console.log('(Задание 11) Массив с произвольным элементом, вставленным после второго:', res);

// Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной.
function sortSinceShort(arr) {
    if (Array.isArray(arr) && arr.filter(a => !Array.isArray(a)).length === 0) {
        let localParam = arr.slice(0, arr.length);
        localParam.sort((a, b) => a.length - b.length);
        return localParam;
    } else return 'Ошибка! Некорректно задан параметр функции!';
}
res = sortSinceShort([[1], [1, 2, 3, 4, 5], [1, 2], [1, 2, 3, 4], [1, 2, 3]]);
console.log('(Задание 12) Массив массивов, отсортированный по возрастанию длины его внутренних массивов:', res);

// Создать копию произвольного массива.
function randomCopy(arr) {
    if (Array.isArray(arr)) {
        let localParam = arr.slice(0, arr.length);
        return localParam;
    } else return 'Ошибка! Параметр функции не является массивом!';
}
res = randomCopy([1, 'hi', null, true, '32', undefined, 'wow']);
console.log('(Задание 13) Копия произвольного массива:', res);

/* Отсортировать массив объектов по возрастающему количеству ног животных:
[
  {kind: "tarantula", info: {legs: 8, eyes: 8}},
  {kind: "french bulldog", info: {legs: 4, eyes: 2}},
  {kind: "human", info: {legs: 2, eyes: 2}},
  {kind: "lobster", info: {legs: 10, eyes: 2}},

] */
function sortQuantityLegs(arr) {
    let localParam = arr.slice(0, arr.length);
    localParam.sort((a, b) => a.info.legs - b.info.legs);
    return localParam;
}
res = sortQuantityLegs([
    {kind: "tarantula", info: {legs: 8, eyes: 8}},
    {kind: "french bulldog", info: {legs: 4, eyes: 2}},
    {kind: "human", info: {legs: 2, eyes: 2}},
    {kind: "lobster", info: {legs: 10, eyes: 2}},
]);
console.log('(Задание 14) Массив объектов, отсортированный по возрастающему количеству ног животных:', res);

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
    if (Array.isArray(arr) && typeof(x) === 'number' && typeof(y) === 'number' && x < y) {
        let localParam = arr.slice(0, arr.length);
        return localParam.sort((a, b) => a.executionTime - b.executionTime).filter((c) => c.executionTime >= x && c.executionTime <= y);
    } else return 'Ошибка! Некорректно задан параметр функции!';
}
res = filterServices(services, 20, 60);
console.log('(Задание 15) Массив услуг, время исполнения которых соответствует диапазону и сортированный от меньшего времени исполнения к большему:', res);