import * as dom from './dom';
import * as storage from './storage';

// const tasks = [];
let activeTab;
setActiveTab('All');

// add handlers
const searchArea = document.querySelector('.container__input-search');
searchArea.addEventListener('input', onSearchClick);

const tabArea = document.querySelector('.container__nav');
tabArea.addEventListener('click', onTabsClick);

const taskForm = document.querySelector('.container__form-task');
taskForm.addEventListener('submit', onTaskFormSubmit);

const listArea = document.querySelector('.container__list');
listArea.addEventListener('click', onListAreaClick);

// functions-handlers
function onSearchClick(e) {
  const inputValue = e.target.value;
  const tasksOfClickedTab = getTasksForClickedTab(activeTab);
  const tasksContainValue = tasksOfClickedTab.filter((x) => x.text.includes(inputValue));
  listArea.innerHTML = '';
  displayTasksForClickedTab(tasksContainValue);
}

function onTaskFormSubmit(e) {
  const textareaEl = e.target.querySelector('#textarea-task');
  const taskText = textareaEl.value;
  if (!taskText) {
    alert('Please, entering some text of task!');
    return;
  }
  addTask(taskText);
  textareaEl.value = '';
}

function onListAreaClick(e) {
  const listEl = e.target.tagName;
  if (listEl === 'UL') return;
  const idTask = e.target.closest('li').dataset.id;
  switch (listEl) {
    case 'LI':
    case 'SPAN':
    case 'P':
      if (idTask) {
        toggleDone(idTask);
      }
      break;
    case 'BUTTON':
      if (e.target.className === 'delete-btn') {
        deleteEl(idTask);
      } else {
        toggleImportant(idTask);
      }
      break;
    case 'UL':
      return;
    default:
      alert('Unsupported value of tagName!');
  }
}

function onTabsClick(e) {
  if (!e.target.classList.contains('container-nav__item')) return;
  listArea.innerHTML = '';
  const tabName = e.target.textContent;
  setActiveTab(tabName);
}

// functions
function setActiveTab(tabName) {
  activeTab = tabName;
  dom.setActiveTab(tabName);
  const filteredTasks = getTasksForClickedTab(tabName);
  displayTasksForClickedTab(filteredTasks);
}

function getTasksForClickedTab(tabName) {
  const tasks = storage.getStorage();
  if (tabName === 'All') {
    return tasks;
  }
  if (tabName === 'Active') {
    return tasks.filter((x) => x.isDone === false);
  }
  if (tabName === 'Done') {
    return tasks.filter((x) => x.isDone === true);
  }
  return alert('Unsupported value of tabName!');
}

function displayTasksForClickedTab(filteredTasks) {
  filteredTasks.forEach((x) => dom.addTask(x));
}
function addTask(taskText) {
  const task = {
    id: Math.round(Math.random() * 10000000),
    text: '',
    isImportant: false,
    isDone: false,
  };
  task.text = taskText;
  const tasks = storage.getStorage();
  tasks.push(task);
  storage.setStorage(tasks);
  dom.addTask(task);
}

function deleteEl(idTask) {
  const tasks = storage.getStorage();
  const taskForDelete = tasks.find((x) => x.id === +idTask);
  const indexTaskForDelete = tasks.indexOf(taskForDelete);
  tasks.splice(indexTaskForDelete, 1);
  storage.setStorage(tasks);
  dom.removeTask(idTask);
}

function toggleImportant(idTask) {
  const tasks = storage.getStorage();
  const importantTask = tasks.find((x) => x.id === +idTask);
  importantTask.isImportant = !importantTask.isImportant;
  storage.setStorage(tasks);
  dom.toggleImportant(idTask);
}

function toggleDone(idTask) {
  const tasks = storage.getStorage();
  const doneTask = tasks.find((x) => x.id === +idTask);
  doneTask.isDone = !doneTask.isDone;
  storage.setStorage(tasks);
  switch (activeTab) {
    case 'All':
      dom.toggleDone(idTask);
      break;
    case 'Active':
    case 'Done':
      dom.removeTask(idTask);
      break;
    default:
      alert('Unsupported value of activeTab');
  }
}
