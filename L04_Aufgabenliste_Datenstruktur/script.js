"use strict";
/*
Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Kevin Erne>
Matrikel: <274303>
Datum: <08.04.2023>
Quellen: <Keine>
*/
window.addEventListener("load", handleLoad);
function handleLoad() {
    date();
    let newTaskBtn = document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask);
    let newInfoBtn = document.querySelector(".addInfoBtn");
    newInfoBtn.addEventListener("click", addNewInfo);
    let checkbox = document.querySelector(".taskDone");
    checkbox.addEventListener("click", deleteTask);
}
function addNewTask() {
    let name = document.getElementById("name").value;
    let person = document.getElementById("newTaskPerson").value;
    let date = new Date(document.getElementById("date").value);
    let info = document.getElementById("newInfos").value;
    let newTask = { name, date, info, person };
    data.Task.push(newTask);
    console.log(data.Task);
}
function date() {
    let date = new Date();
    let dateInput = document.getElementById("oldDate");
    let oldDate = new Date(dateInput.value);
    if (date > oldDate) {
        console.log("Your task is overdue!");
    }
}
function addNewInfo() {
    console.log("You added additional infos to this task!");
}
function deleteTask() {
    console.log("You deleted this task!");
}
//# sourceMappingURL=script.js.map