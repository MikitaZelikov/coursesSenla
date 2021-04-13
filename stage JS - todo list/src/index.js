'use strict';

let activeTab; // All || Active || Done
let tasks = [];
/*{
    text: '',
    isImportant: false,
    isDone: false
}*/

function add(text) {
    let task = {
        text: text,
        isImportant: false,
        isDone: false
    };
    tasks.push(task);

    // TODO add to DOM
}

function remove(i) {
    tasks.splice(i, 1);

    // TODO remove from DOM
}

function switchIsImportant(i, isImportant) {
    tasks[i].isImportant = isImportant;

    // TODO update in DOM
}

function switchIsDone(i, isDone) {
    tasks[i].isDone = isDone;

    // TODO update in DOM
}

function renderTasks(tasks) {
    // TODO
}

function search(q) {
    let tasksToShow = getTasksForActiveTab();
    tasksToShow = tasksToShow.filter(x => x.text.toLowerCase().includes(q.toLowerCase()));
    renderTasks(tasksToShow);
}

function switchTab(tab) {
    activeTab = tab;

    // TODO update active tab in DOM

    let tasksToShow = getTasksForActiveTab();
    renderTasks(tasksToShow);
}

function getTasksForActiveTab() {
    switch (activeTab) {
        case 'All': return tasks;
        case 'Active': return tasks.filter(x => x.isDone === false);
        case 'Done': return tasks.filter(x => x.isDone === true);
        default: throw new Error(`Неподдерживаемое значение activeTab: ${activeTab}.`);
    }
}

const button = document.querySelector('.container__button-task');
const list = document.querySelector('.container__list');
button.addEventListener('click', function() {
    const li = document.createElement('li');
    let textareaValue = document.getElementById('textarea-task').value;
    const importantBtn = document.createElement('button');
    importantBtn.className = 'important-btn';
    importantBtn.textContent = 'mark important';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    if (textareaValue === '') {
        alert('To add a task enter some text!');
    } else {
        li.textContent = textareaValue;
        li.append(importantBtn);
        li.append(deleteBtn);
        list.append(li);
        document.getElementById('textarea-task').value = '';
    }
});

document.addEventListener('click', function(e) {
    if (e.target.parentElement !== 'LI') return;
    // if (e.target.className === 'delete-btn') {
        e.target.parentElement.hidden = true;
    // } else {

    // };
});

switchTab('All');
