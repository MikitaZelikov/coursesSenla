/** creat li-element in DOM-tree */
// eslint-disable-next-line import/prefer-default-export
export function addTask(task) {
  const list = document.querySelector('.container__list');

  const li = document.createElement('li');
  li.dataset.id = task.id;
  if (task.isDone === true) {
    li.classList.add('is-done');
  }
  if (task.isImportant === true) {
    li.classList.add('is-important');
  }

  const symbolStar = document.createElement('span');
  symbolStar.className = 'symbol-star';
  li.append(symbolStar);

  const p = document.createElement('p');
  p.textContent = task.text;
  li.append(p);

  const importantBtn = document.createElement('button');
  importantBtn.className = 'important-btn';
  li.append(importantBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  li.append(deleteBtn);

  list.prepend(li);
}

export function removeTask(idTask) {
  const liElem = getLiEl(idTask);
  liElem.remove();
}

export function toggleDone(idTask) {
  const liElem = getLiEl(idTask);
  liElem.classList.toggle('is-done');
}

export function toggleImportant(idTask) {
  const liElem = getLiEl(idTask);
  liElem.classList.toggle('is-important');
}

export function setActiveTab(activeTab) {
  const prevActiveTabEl = document.querySelector('.active');
  if (prevActiveTabEl) {
    prevActiveTabEl.classList.remove('active');
  }
  const tabs = document.querySelectorAll('.container-nav__item');
  for (const tab of tabs) {
    if (tab.textContent === activeTab) {
      tab.classList.add('active');
    }
  }
}

function getLiEl(idTask) {
  return document.querySelector(`li[data-id="${idTask}"]`);
}
