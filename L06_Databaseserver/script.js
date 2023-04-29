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
let url = "https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php";
let taskList = [];
let items = [];
getTaskList();
async function handleLoad() {
    let newTaskBtn = document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask);
    let response = await fetch(url);
    let task = await response.text();
    data = JSON.parse(task);
    console.log(task);
    getTaskList();
    showTasks();
    /*if(items[0].date != null){
        date();
    }*/
}
async function getTaskList() {
    let response = fetch(url + "?command=find&collection=Task");
    let test = await (await response).json();
    for (const id in test.data) {
        if (Object.hasOwnProperty.call(test.data, id)) {
            const item = test.data[id];
            items.push(item);
        }
    }
}
async function sendTasks(_event) {
    let form = document.getElementById("newTaskForm");
    let formData = new FormData(form);
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    console.log(responseText);
    alert("Task added!");
}
async function addNewTask() {
    let name = document.getElementById("name").value;
    let person = document.getElementById("newTaskPerson").value;
    let date = new Date(document.getElementById("date").value);
    let info = document.getElementById("newInfos").value;
    const data = {
        name: name,
        person: person,
        info: info,
        date: date
    };
    let query = new URLSearchParams();
    query.set("command", "insert");
    query.set("collection", "Task");
    query.set("data", JSON.stringify(data));
    await fetch(url + "?" + query);
    location.reload();
}
function date() {
    let todayDate = new Date();
    for (let a = 0; a < items.length; a++) {
        let setDate = items[a].date;
        let setDateToDate = new Date(setDate);
        if (todayDate > setDateToDate) {
            let element = document.getElementById("date" + a);
            element.style.color = "red";
        }
    }
}
async function addNewInfo(_event) {
    console.log("You added additional infos to this task!");
    const target = _event.target;
    let targetId = target.id;
    let newInfoTargetId = +targetId;
    let newInfoInput = document.getElementById("input" + targetId);
    let inputValue = newInfoInput.value;
    items[newInfoTargetId].info += ", " + inputValue;
    for (let a = 0; a < items.length; a++) {
        const data = {
            name: items[a].name,
            person: items[a].person,
            date: items[a].date,
            info: items[a].info
        };
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Task");
        query.set("data", JSON.stringify(data));
        await fetch(url + "?" + query);
    }
    location.reload();
}
async function deleteTask(_event) {
    console.log("You deleted this task!");
    const target = _event.target;
    let targetId = target.id;
    let deletTargetId = +targetId;
    items.splice(deletTargetId, 1);
    console.log(deletTargetId);
    let formDelete = document.getElementById("form" + targetId);
    formDelete.remove();
    let line = document.getElementById("line" + deletTargetId);
    line.remove();
    console.log(data.Task);
    fetch(url + "?command=drop&collection=Task");
    fetch(url + "?command=create&collection=Task");
    for (let a = 0; a < items.length; a++) {
        const data = {
            name: items[a].name,
            person: items[a].person,
            date: items[a].date,
            info: items[a].info
        };
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Task");
        query.set("data", JSON.stringify(data));
        await fetch(url + "?" + query);
    }
    console.log(items);
}
function clearAllTasks() {
    for (let a = 0; a < items.length; a++) {
        let deleteForm = document.getElementById("form" + a);
        deleteForm.remove();
        let line = document.getElementById("line" + a);
        line.remove();
    }
}
async function showTasks() {
    for (let a = 0; a < items.length; a++) {
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
        newTaskNameLabel.textContent = items[a].name;
        console.log(items[a].name);
        newTaskNameLabel.setAttribute("for", "" + a);
        newTaskNameLabel.style.fontSize = "x-large";
        newForm.appendChild(newTaskNameLabel);
        let newTaskPerson = document.createElement("p");
        newTaskPerson.textContent = items[a].person;
        newForm.appendChild(newTaskPerson);
        let newTaskDate = document.createElement("p");
        let newDate = items[a].date;
        newTaskDate.setAttribute("id", "date" + a);
        newTaskDate.textContent = newDate.toLocaleString();
        newForm.appendChild(newTaskDate);
        let additionalInofs = document.createElement("h4");
        additionalInofs.textContent = "Addtional Infos:";
        newForm.appendChild(additionalInofs);
        let newTaskInfos = document.createElement("p");
        newTaskInfos.textContent = items[a].info;
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
    //date();
}
//# sourceMappingURL=script.js.map