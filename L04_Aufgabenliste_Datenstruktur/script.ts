/*
Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Kevin Erne>
Matrikel: <274303>
Datum: <08.04.2023>
Quellen: <Keine>
*/


window.addEventListener("load", handleLoad);

function handleLoad():void{
    //date();
    showTasks();

    let newTaskBtn : HTMLButtonElement = <HTMLButtonElement> document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask)

    /*let newInfoBtn : HTMLButtonElement = <HTMLButtonElement> document.querySelector(".addInfoBtn");
    newInfoBtn.addEventListener("click", addNewInfo);

    let checkbox : HTMLInputElement = <HTMLInputElement> document.querySelector(".taskDone");
    checkbox.addEventListener("click", deleteTask);*/
}

function addNewTask(){
    let name :string = (<HTMLInputElement>document.getElementById("name")).value
    let person: string = (<HTMLSelectElement>document.getElementById("newTaskPerson")).value
    let date:Date = new Date((<HTMLInputElement>document.getElementById("date")).value)
    let info:string = (<HTMLInputElement>document.getElementById("newInfos")).value
    let newTask={name, date, info, person}
    data.Task.push(newTask)
    //console.log(data.Task);

    showNewTask();
    
}

/*function date(){
    let date :Date = new Date();

    let dateInput : HTMLInputElement = <HTMLInputElement> document.getElementById("oldDate")
    let oldDate : Date = new Date(dateInput.value);

    if (date>oldDate){
        console.log("Your task is overdue!");
    }
}*/

function addNewInfo():void{
    console.log("You added additional infos to this task!")
}

function deleteTask(): void{
    console.log("You deleted this task!");
}

function showTasks(): void{

    for (let a = 0; a < data.Task.length; a++) {
    let divActiveTask: HTMLDivElement = <HTMLDivElement> document.getElementById("activeTask");
    let newForm : HTMLFormElement = document.createElement("form");
    newForm.class = "taskForm";
    divActiveTask.appendChild(newForm);

    let newTaskName : HTMLInputElement = document.createElement("input")
    newTaskName.type = "radio"
    newTaskName.setAttribute("id", "taskName");
    newTaskName.setAttribute("class", "a");
    newTaskName.style.width = "5%"
    newTaskName.style.marginTop = "2%";
    newForm.appendChild(newTaskName);

    let newTaskNameLabel :HTMLLabelElement = document.createElement("label");
    newTaskNameLabel.textContent = data.Task[a].name
    newTaskNameLabel.setAttribute("for", "taskName")
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);

    let newTaskPerson : HTMLElement = document.createElement("p");
    newTaskPerson.textContent = data.Task[a].person;
    newForm.appendChild(newTaskPerson);

    let newTaskDate : HTMLElement = document.createElement("p");
    let newDate: Date = data.Task[a].date
    newTaskDate.textContent=newDate.toLocaleString()
    newForm.appendChild(newTaskDate)

    let additionalInofs: HTMLElement = document.createElement("h4");
    additionalInofs.textContent = "Addtional Infos:"
    newForm.appendChild(additionalInofs);

    let newTaskInfos : HTMLElement = document.createElement("p");
    newTaskInfos.textContent = data.Task[a].info;
    newForm.appendChild(newTaskInfos);

    let addInfoInput : HTMLInputElement = document.createElement("input");
    addInfoInput.setAttribute("placeholder", "Add Infos");
    addInfoInput.style.marginRight = "2%";
    newForm.appendChild(addInfoInput);

    let addInfoBtn : HTMLButtonElement = document.createElement("button");
    addInfoBtn.textContent = "+";
    addInfoBtn.setAttribute("class", "addInfoBtn");
    newForm.appendChild(addInfoBtn);

    let newTaskDoneInput: HTMLInputElement = document.createElement("input");
    newTaskDoneInput.setAttribute("type", "checkbox");
    newTaskDoneInput.setAttribute("id", "DoneInput");
    newForm.appendChild(newTaskDoneInput);

    let newTaskDoneInputLabel: HTMLLabelElement = document.createElement("label");
    newTaskDoneInputLabel.textContent = "I'm doing it!";
    newTaskDoneInputLabel.setAttribute("for", "DoneInput");
    newForm.appendChild(newTaskDoneInputLabel);


    let test : HTMLFormElement = document.createElement("form");
    test.setAttribute("class", "taskForm");
    divActiveTask.appendChild(test);
    }
}

function showNewTask(): void{
    let b : number = data.Task.length
    let divActiveTask: HTMLDivElement = <HTMLDivElement> document.getElementById("activeTask");
    let newForm : HTMLFormElement = document.createElement("form");
    newForm.class = "taskForm";
    divActiveTask.appendChild(newForm);

    let newTaskName : HTMLInputElement = document.createElement("input")
    newTaskName.type = "radio"
    newTaskName.setAttribute("id", "name");
    newTaskName.style.width = "5%"
    newTaskName.style.marginTop = "2%";
    newForm.appendChild(newTaskName);

    let newTaskNameLabel :HTMLLabelElement = document.createElement("label");
    newTaskNameLabel.textContent = data.Task[b-1].name
    newTaskNameLabel.setAttribute("for", "name")
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);

    let newTaskPerson : HTMLElement = document.createElement("p");
    newTaskPerson.textContent = data.Task[b-1].person;
    newForm.appendChild(newTaskPerson);

    let newTaskDate : HTMLElement = document.createElement("p");
    let newDate: Date = data.Task[b-1].date
    newTaskDate.textContent=newDate.toLocaleString()
    newForm.appendChild(newTaskDate)

    let additionalInofs: HTMLElement = document.createElement("h4");
    additionalInofs.textContent = "Addtional Infos:"
    newForm.appendChild(additionalInofs);

    let newTaskInfos : HTMLElement = document.createElement("p");
    newTaskInfos.textContent = data.Task[b-1].info;
    newForm.appendChild(newTaskInfos);

    let addInfoInput : HTMLInputElement = document.createElement("input");
    addInfoInput.setAttribute("placeholder", "Add Infos");
    addInfoInput.style.marginRight = "2%";
    newForm.appendChild(addInfoInput);

    let addInfoBtn : HTMLButtonElement = document.createElement("button");
    addInfoBtn.textContent = "+";
    addInfoBtn.setAttribute("class", "addInfoBtn");
    newForm.appendChild(addInfoBtn);

    let newTaskDoneInput: HTMLInputElement = document.createElement("input");
    newTaskDoneInput.setAttribute("type", "checkbox");
    newTaskDoneInput.setAttribute("id", "DoneInput");
    newForm.appendChild(newTaskDoneInput);

    let newTaskDoneInputLabel: HTMLLabelElement = document.createElement("label");
    newTaskDoneInputLabel.textContent = "I'm doing it!";
    newTaskDoneInputLabel.setAttribute("for", "DoneInput");
    newForm.appendChild(newTaskDoneInputLabel);


    let test : HTMLFormElement = document.createElement("form");
    test.setAttribute("class", "taskForm");
    divActiveTask.appendChild(test);
}

