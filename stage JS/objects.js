'use strict';
// Создать объект с полем 'notebook' равным 'MacBook';
let obj = {
    notebook: 'MacBook',
}

// Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar';
obj.price = 1500;
obj.currensy = 'dollar';

// Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами);
obj.details = {
    model: 'Air',
    color: '#C0C0C0',
}

console.log(obj);