/** Add li with nested markup */
export function addTask(task) {
    const list = document.querySelector('.container__list');

    const li = document.createElement('li');
    li.className = 'container-list__item';
    if (task.isDone) {
        li.classList.add('is-done');
    }
    if (task.isImportant) {
        li.classList.add('is-important');
    }
    li.dataset.id = task.id; 

    const symbolStar = document.createElement('span');
    symbolStar.className = 'symbol-star';
    li.prepend(symbolStar);

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

export function removeTask(id) {
    const li = getLi(id);
    li.remove();
}

export function removeAllTasks() {
    const list = document.querySelector('.container__list');
    list.innerHTML = '';
}

export function toggleIsImportant(id) {
    const li = getLi(id);
    li.classList.toggle('is-important');
    // li.querySelector('.important-btn').textContent = 'not important';
}

export function toggleIsDone(id) {
    const li = getLi(id);
    li.classList.toggle('is-done');
}

export function setActiveTab(tabName) {
    let navEl = document.querySelector('.container__nav');
    let prevActiveTabEl = navEl.querySelector('.active');
    if (prevActiveTabEl) {
        prevActiveTabEl.classList.remove('active');
    } 
    
    let activeTabEl = Array.from(navEl.children).find(x => x.textContent === tabName);
    activeTabEl.classList.add('active');
}

function getLi(id) {
    return document.querySelector(`.container-list__item[data-id="${id}"]`);
}

// list.addEventListener('click', function(e) {
//     if (e.target.parentElement.tagName !== 'LI') return;
//     if (e.target.className === 'delete-btn') {
//         e.target.parentElement.hidden = true;
//     } else if (e.target.className !== 'delete-btn') {
//         const symbolStar = document.createElement('span');
//         symbolStar.className = 'symbol-star';
//         e.target.parentElement.prepend(symbolStar);
//         e.target.classList.toggle('noimportant-btn');
//     } else return;
// });
