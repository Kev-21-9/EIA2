"use strict";
/*
Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Kevin Erne>
Matrikel: <274303>
Datum: <08.04.2023>
Quellen: <Keine>
*/
window.addEventListener("load", handleLoad);
let data;
async function handleLoad() {
    let newTaskBtn = document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask);
    /*let newInfoBtn : HTMLButtonElement = <HTMLButtonElement> document.querySelector(".addInfoBtn");
    newInfoBtn.addEventListener("click", addNewInfo);*/
    let response = await fetch("data.json");
    let task = await response.text();
    data = JSON.parse(task);
    console.log(data.Task[0]);
    date();
    showTasks();
}
async function sendTasks(_event) {
    let form = document.getElementById("newTaskForm");
    let formData = new FormData(form);
    let query = new URLSearchParams(formData);
    await fetch("index.html?" + query.toString());
    alert("Task added!");
}
function addNewTask() {
    let name = document.getElementById("name").value;
    let person = document.getElementById("newTaskPerson").value;
    let date = new Date(document.getElementById("date").value);
    let info = document.getElementById("newInfos").value;
    let newTask = { name, date, info, person };
    data.Task.push(newTask);
    //console.log(data.Task);
    showNewTask();
}
function date() {
    let todayDate = new Date();
    for (let a = 0; a < data.Task.length; a++) {
        let setDate = data.Task[a].date;
        let setDateToDate = new Date(setDate);
        if (todayDate > setDateToDate) {
            let element = document.getElementById("date" + a);
            element.style.color = "red";
        }
    }
}
function addNewInfo(_event) {
    console.log("You added additional infos to this task!");
    const target = _event.target;
    let targetId = target.id;
    let newInfoTargetId = +targetId;
    let newInfoInput = document.getElementById("input" + targetId);
    let inputValue = newInfoInput.value;
    data.Task[newInfoTargetId].info += ", " + inputValue;
    console.log(data.Task[newInfoTargetId].info);
    console.log(data.Task);
    clearAllTasks();
    console.log(data.Task);
    showTasks();
    console.log(data.Task);
}
function deleteTask(_event) {
    console.log("You deleted this task!");
    const target = _event.target;
    let targetId = target.id;
    let deletTargetId = +targetId;
    data.Task.splice(deletTargetId, 1);
    console.log(deletTargetId);
    let formDelete = document.getElementById("form" + targetId);
    formDelete.remove();
    let line = document.getElementById("line" + deletTargetId);
    line.remove();
    console.log(data.Task);
}
function clearAllTasks() {
    for (let a = 0; a < data.Task.length; a++) {
        let deleteForm = document.getElementById("form" + a);
        deleteForm.remove();
        let line = document.getElementById("line" + a);
        line.remove();
    }
}
function showTasks() {
    for (let a = 0; a < data.Task.length; a++) {
        let divActiveTask = document.getElementById("activeTask");
        let newForm = document.createElement("form");
        newForm.class = "taskForm";
        newForm.setAttribute("id", "form" + a);
        console.log(newForm.id);
        divActiveTask.appendChild(newForm);
        let newTaskName = document.createElement("input");
        newTaskName.type = "radio";
        newTaskName.setAttribute("id", "" + a);
        console.log(newTaskName.id);
        newTaskName.setAttribute("class", "a");
        newTaskName.style.width = "5%";
        newTaskName.style.marginTop = "2%";
        newTaskName.addEventListener("click", deleteTask);
        newForm.appendChild(newTaskName);
        let newTaskNameLabel = document.createElement("label");
        newTaskNameLabel.textContent = data.Task[a].name;
        newTaskNameLabel.setAttribute("for", "" + a);
        newTaskNameLabel.style.fontSize = "x-large";
        newForm.appendChild(newTaskNameLabel);
        let newTaskPerson = document.createElement("p");
        newTaskPerson.textContent = data.Task[a].person;
        newForm.appendChild(newTaskPerson);
        let newTaskDate = document.createElement("p");
        let newDate = data.Task[a].date;
        newTaskDate.setAttribute("id", "date" + a);
        newTaskDate.textContent = newDate.toLocaleString();
        newForm.appendChild(newTaskDate);
        let additionalInofs = document.createElement("h4");
        additionalInofs.textContent = "Addtional Infos:";
        newForm.appendChild(additionalInofs);
        let newTaskInfos = document.createElement("p");
        newTaskInfos.textContent = data.Task[a].info;
        newForm.appendChild(newTaskInfos);
        let addInfoInput = document.createElement("input");
        addInfoInput.setAttribute("placeholder", "Add Infos");
        addInfoInput.style.marginRight = "2%";
        addInfoInput.setAttribute("id", "input" + a);
        newForm.appendChild(addInfoInput);
        let addInfoBtn = document.createElement("button");
        addInfoBtn.textContent = "+";
        addInfoBtn.setAttribute("class", "addInfoBtn");
        addInfoBtn.setAttribute("type", "button");
        addInfoBtn.setAttribute("id", "" + a);
        addInfoBtn.addEventListener("click", addNewInfo);
        newForm.appendChild(addInfoBtn);
        let newTaskDoneInput = document.createElement("input");
        newTaskDoneInput.setAttribute("type", "checkbox");
        newTaskDoneInput.setAttribute("id", "DoneInput");
        newForm.appendChild(newTaskDoneInput);
        let newTaskDoneInputLabel = document.createElement("label");
        newTaskDoneInputLabel.textContent = "I'm doing it!";
        newTaskDoneInputLabel.setAttribute("for", "DoneInput");
        newForm.appendChild(newTaskDoneInputLabel);
        let test = document.createElement("form");
        test.setAttribute("class", "taskForm");
        test.setAttribute("id", "line" + a);
        divActiveTask.appendChild(test);
    }
    date();
}
//geriert neuen Task nach Btn AddNewTask
function showNewTask() {
    let b = (data.Task.length - 1);
    let divActiveTask = document.getElementById("activeTask");
    let newForm = document.createElement("form");
    newForm.class = "taskForm";
    newForm.setAttribute("id", "form" + b);
    divActiveTask.appendChild(newForm);
    let newTaskName = document.createElement("input");
    newTaskName.type = "radio";
    newTaskName.setAttribute("id", "" + b);
    newTaskName.style.width = "5%";
    newTaskName.style.marginTop = "2%";
    newTaskName.addEventListener("click", deleteTask);
    newForm.appendChild(newTaskName);
    let newTaskNameLabel = document.createElement("label");
    newTaskNameLabel.textContent = data.Task[b].name;
    newTaskNameLabel.setAttribute("for", "" + b);
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);
    let newTaskPerson = document.createElement("p");
    newTaskPerson.textContent = data.Task[b].person;
    newForm.appendChild(newTaskPerson);
    let newTaskDate = document.createElement("p");
    let newDate = data.Task[b].date;
    newTaskDate.setAttribute("id", "date" + b);
    newTaskDate.textContent = newDate.toLocaleString();
    newForm.appendChild(newTaskDate);
    let additionalInofs = document.createElement("h4");
    additionalInofs.textContent = "Addtional Infos:";
    newForm.appendChild(additionalInofs);
    let newTaskInfos = document.createElement("p");
    newTaskInfos.textContent = data.Task[b].info;
    newForm.appendChild(newTaskInfos);
    let addInfoInput = document.createElement("input");
    addInfoInput.setAttribute("placeholder", "Add Infos");
    addInfoInput.setAttribute("id", "input" + b);
    addInfoInput.style.marginRight = "2%";
    newForm.appendChild(addInfoInput);
    let addInfoBtn = document.createElement("button");
    addInfoBtn.textContent = "+";
    addInfoBtn.setAttribute("class", "addInfoBtn");
    addInfoBtn.setAttribute("type", "button");
    addInfoBtn.setAttribute("id", "" + b);
    addInfoBtn.addEventListener("click", addNewInfo);
    newForm.appendChild(addInfoBtn);
    let newTaskDoneInput = document.createElement("input");
    newTaskDoneInput.setAttribute("type", "checkbox");
    newTaskDoneInput.setAttribute("id", "DoneInput");
    newForm.appendChild(newTaskDoneInput);
    let newTaskDoneInputLabel = document.createElement("label");
    newTaskDoneInputLabel.textContent = "I'm doing it!";
    newTaskDoneInputLabel.setAttribute("for", "DoneInput");
    newForm.appendChild(newTaskDoneInputLabel);
    let test = document.createElement("form");
    test.setAttribute("class", "taskForm");
    test.setAttribute("id", "line" + b);
    divActiveTask.appendChild(test);
    date();
}
//# sourceMappingURL=script.js.map