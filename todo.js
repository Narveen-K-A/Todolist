const newTaskInput = document.querySelector("#newtask input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

window.onload = () => {
	updateNote = "";
	count = Object.keys(localStorage).length;
	displayTasks();
};