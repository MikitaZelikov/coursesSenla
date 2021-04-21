export function setStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getStorage() {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
