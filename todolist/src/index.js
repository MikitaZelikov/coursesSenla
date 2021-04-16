import * as DOM from './dom';
import * as storage from './storage';

let activeTabName; // All || Active || Done

function addTask(text) {
  const task = {
    id: Math.round((Math.random() * 100000000)),
    text,
    isImportant: false,
    isDone: false,
  };
  const tasks = storage.getTasks();
  tasks.unshift(task);
  storage.setTasks(tasks);
  DOM.addTask(task);
}

function removeTask(id) {
  const tasks = storage.getTasks();
  const i = tasks.indexOf((x) => x.id === id);
  tasks.splice(i, 1);
  storage.setTasks(tasks);
  DOM.removeTask(id);
}

function switchIsImportant(id) {
  const tasks = storage.getTasks();
  const task = tasks.find((x) => x.id === id);
  task.isImportant = !task.isImportant;
  storage.setTasks(tasks);
  DOM.toggleIsImportant(task.id);
}

function switchIsDone(id) {
  const tasks = storage.getTasks();
  const task = tasks.find((x) => x.id === id);
  task.isDone = !task.isDone;
  storage.setTasks(tasks);
  DOM.toggleIsDone(task.id);
  if ((activeTabName === 'Active' && task.isDone)
      || (activeTabName === 'Done' && !task.isDone)) {
    DOM.removeTask(task.id);
  }
}

function renderTasks(tasks) {
  DOM.removeAllTasks();
  tasks.forEach((x) => DOM.addTask(x));
}

function search(q) {
  let tasksToShow = getTasksForActiveTab();
  tasksToShow = tasksToShow.filter((x) => x.text.toLowerCase().includes(q.toLowerCase()));
  renderTasks(tasksToShow);
}

function switchTab(tabName) {
  activeTabName = tabName;
  DOM.setActiveTab(tabName);
  const tasksToShow = getTasksForActiveTab();
  renderTasks(tasksToShow);
}

function getTasksForActiveTab() {
  const tasks = storage.getTasks();
  switch (activeTabName) {
    case 'All': return tasks;
    case 'Active': return tasks.filter((x) => x.isDone === false);
    case 'Done': return tasks.filter((x) => x.isDone === true);
    default: throw new Error(`Неподдерживаемое значение activeTab: ${activeTabName}.`);
  }
}

function onSearchInput(e) {
  search(e.target.value);
}

function onTabsContainerClick(e) {
  if (!e.target.classList.contains('container-nav__item')) return;
  const tab = e.target.textContent;
  switchTab(tab);
}

function onTaskFormSubmit(e) {
  const textAreaEl = e.target.querySelector('#textarea-task');
  const taskText = textAreaEl.value;
  if (!taskText) {
    alert('To add a task enter some text!');
    return;
  }
  addTask(taskText);
  textAreaEl.value = '';
}

function onTasksListClick(e) {
  if (e.target.classList.contains('container__list')) return;

  const li = e.target.closest('li');
  const id = +li.dataset.id;

  switch (e.target.tagName.toLowerCase()) {
    case 'li':
    case 'p':
    case 'span':
      switchIsDone(id);
      break;
    case 'button': {
      if (e.target.classList.contains('important-btn')) {
        switchIsImportant(id);
      } else if (e.target.classList.contains('delete-btn')) {
        removeTask(id);
      } else {
        throw new Error(`Неподдерживаемое значение className: ${e.target.className}.`);
      }
      break;
    }
    default: throw new Error(`Неподдерживаемое значение tagName: ${e.target.tagName}.`);
  }
}

const searchInputEl = document.querySelector('.container__input-search');
searchInputEl.addEventListener('input', onSearchInput);
const tabsContainerEl = document.querySelector('.container__nav');
tabsContainerEl.addEventListener('click', onTabsContainerClick);
const taskFormEl = document.querySelector('.container__form-task');
taskFormEl.addEventListener('submit', onTaskFormSubmit);
const tasksContainerEl = document.querySelector('.container__list');
tasksContainerEl.addEventListener('click', onTasksListClick);

switchTab('All');