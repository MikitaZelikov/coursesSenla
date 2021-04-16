export function getTasks() {
    return localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
}

export function setTasks(tasks) {
    localStorage.tasks = JSON.stringify(tasks);
}
