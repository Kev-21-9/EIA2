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
    newInfoBtn.addEventListener("click", addNewInfo);*/
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

function date(){
    let todayDate :Date = new Date();

    for(let a = 0; a< data.Task.length; a++){
        let setDate : Date = data.Task[a].date
        let setDateToDate = new Date(setDate)
        if (todayDate>setDateToDate){
            let element : HTMLElement = <HTMLElement> document.getElementById("date"+a);
            element.style.color = "red";
        }

    }
}

function addNewInfo(_event: Event):void{
    console.log("You added additional infos to this task!")
    const target = _event.target as HTMLButtonElement
    let targetId: string = target.id;
    let newInfoTargetId: number = +targetId;
    let newInfoInput :  HTMLInputElement = <HTMLInputElement> document.getElementById("input"+targetId)
    let inputValue: string = newInfoInput.value;
    data.Task[newInfoTargetId].info += ", " + inputValue;
    console.log(data.Task[newInfoTargetId].info);
    console.log(data.Task);
    clearAllTasks();
    console.log(data.Task);
    showTasks();
    console.log(data.Task);
}

function deleteTask(_event: Event): void{
    console.log("You deleted this task!");
    const target = _event.target as HTMLButtonElement
    let targetId :string = target.id;
    let deletTargetId : number = +targetId;
    data.Task.splice(deletTargetId, 1);
    console.log(deletTargetId);
    let formDelete : HTMLFormElement = <HTMLFormElement>document.getElementById("form"+targetId);
    formDelete.remove()
    let line: HTMLFormElement = <HTMLFormElement> document.getElementById("line"+deletTargetId);
    line.remove();
    console.log(data.Task);
}

function clearAllTasks(){
    for (let a = 0; a < data.Task.length; a++){
        let deleteForm: HTMLFormElement = <HTMLFormElement> document.getElementById("form"+a);
        deleteForm.remove();
        let line: HTMLFormElement = <HTMLFormElement> document.getElementById("line"+a);
        line.remove();

    }
}

function showTasks(): void{

    for (let a = 0; a < data.Task.length; a++) {
    let divActiveTask: HTMLDivElement = <HTMLDivElement> document.getElementById("activeTask");
    let newForm : HTMLFormElement = document.createElement("form");
    newForm.class = "taskForm";
    newForm.setAttribute("id", "form"+a)
    console.log(newForm.id);
    divActiveTask.appendChild(newForm);

    let newTaskName : HTMLInputElement = document.createElement("input")
    newTaskName.type = "radio"
    newTaskName.setAttribute("id", ""+a);
    console.log(newTaskName.id);
    newTaskName.setAttribute("class", "a");
    newTaskName.style.width = "5%"
    newTaskName.style.marginTop = "2%";
    newTaskName.addEventListener("click", deleteTask);
    newForm.appendChild(newTaskName);

    let newTaskNameLabel :HTMLLabelElement = document.createElement("label");
    newTaskNameLabel.textContent = data.Task[a].name
    newTaskNameLabel.setAttribute("for", ""+a)
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);

    let newTaskPerson : HTMLElement = document.createElement("p");
    newTaskPerson.textContent = data.Task[a].person;
    newForm.appendChild(newTaskPerson);

    let newTaskDate : HTMLElement = document.createElement("p");
    let newDate: Date = data.Task[a].date
    newTaskDate.setAttribute("id", "date"+a);
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
    addInfoInput.setAttribute("id", "input"+a);
    newForm.appendChild(addInfoInput);

    let addInfoBtn : HTMLButtonElement = document.createElement("button");
    addInfoBtn.textContent = "+";
    addInfoBtn.setAttribute("class", "addInfoBtn");
    addInfoBtn.setAttribute("type", "button");
    addInfoBtn.setAttribute("id", ""+a);
    addInfoBtn.addEventListener("click", addNewInfo);
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
    test.setAttribute("id", "line"+a);
    divActiveTask.appendChild(test);
    }
    date();
}

function showNewTask(): void{
    let b : number = data.Task.length
    let divActiveTask: HTMLDivElement = <HTMLDivElement> document.getElementById("activeTask");
    let newForm : HTMLFormElement = document.createElement("form");
    newForm.class = "taskForm";
    newForm.setAttribute("id", "form"+b);
    divActiveTask.appendChild(newForm);

    let newTaskName : HTMLInputElement = document.createElement("input")
    newTaskName.type = "radio"
    newTaskName.setAttribute("id", ""+b);
    newTaskName.style.width = "5%"
    newTaskName.style.marginTop = "2%";
    newTaskName.addEventListener("click", deleteTask);
    newForm.appendChild(newTaskName);

    let newTaskNameLabel :HTMLLabelElement = document.createElement("label");
    newTaskNameLabel.textContent = data.Task[b-1].name
    newTaskNameLabel.setAttribute("for", ""+b)
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);

    let newTaskPerson : HTMLElement = document.createElement("p");
    newTaskPerson.textContent = data.Task[b-1].person;
    newForm.appendChild(newTaskPerson);

    let newTaskDate : HTMLElement = document.createElement("p");
    let newDate: Date = data.Task[b-1].date
    newTaskDate.setAttribute("id", "date"+(b-1))
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
    addInfoInput.setAttribute("id", "input"+b);
    addInfoInput.style.marginRight = "2%";
    newForm.appendChild(addInfoInput);

    let addInfoBtn : HTMLButtonElement = document.createElement("button");
    addInfoBtn.textContent = "+";
    addInfoBtn.setAttribute("class", "addInfoBtn");
    addInfoBtn.setAttribute("type", "button");
    addInfoBtn.setAttribute("id", ""+b);
    addInfoBtn.addEventListener("click", addNewInfo);
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
    test.setAttribute("id", "line"+b);
    divActiveTask.appendChild(test);

    date();
}

