/*
Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Kevin Erne>
Matrikel: <274303>
Datum: <08.04.2023>
Quellen: <Keine>
*/


window.addEventListener("load", handleLoad);
interface Item{
    name: string;
    date: Date;
    info: string;
    person: string;

}
 interface Data{
    [category:string]: Item[]
}
let data:Data;
let url  : string = "https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php"

let taskList : string[] = [];
let items : Item[] = [];
getTaskList()

async function handleLoad():Promise<void>{
    
    let newTaskBtn : HTMLButtonElement = <HTMLButtonElement> document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask)    

    let response: Response = await fetch(url)
    let task: string = await response.text();
    data = JSON.parse(task);
    
    console.log(task);
    
    getTaskList();

   
    showTasks();
    /*if(items[0].date != null){
        date();
    }*/
    
}

async function getTaskList() : Promise <void>{

let response = fetch(url + "?command=find&collection=Task");
let test = await (await response).json();

for (const id in test.data) {
  if (Object.hasOwnProperty.call(test.data, id)) {
    const item = test.data[id];
    items.push(item);
  }
}


}

async function sendTasks(_event: Event): Promise<void> {
    let form : HTMLFormElement = <HTMLFormElement> document.getElementById("newTaskForm");
    let formData: FormData = new FormData(form);
    let query : URLSearchParams = new URLSearchParams(<any>formData);
    let response : Response = await fetch(url + "?" + query.toString());
    let responseText : string = await response.text();
    console.log(responseText);
    alert("Task added!");
}

async function addNewTask(){
    let name :string = (<HTMLInputElement>document.getElementById("name")).value
    let person: string = (<HTMLSelectElement>document.getElementById("newTaskPerson")).value
    let date:Date = new Date((<HTMLInputElement>document.getElementById("date")).value)
    let info:string = (<HTMLInputElement>document.getElementById("newInfos")).value

    const data = {
        name: name,
        person: person,
        info: info,
        date: date
      };

   let query: URLSearchParams = new URLSearchParams();
    query.set("command", "insert");
    query.set("collection", "Task");
    query.set("data", JSON.stringify(data));

    await fetch(url + "?"+ query);

    location.reload();     
}

function date(){
    let todayDate :Date = new Date();

    for(let a = 0; a< items.length; a++){
        let setDate : Date = items[a].date
        let setDateToDate = new Date(setDate)
        if (todayDate>setDateToDate){
            let element : HTMLElement = <HTMLElement> document.getElementById("date"+a);
            element.style.color = "red";
        }

    }
}

async function addNewInfo(_event: Event): Promise<void>{
    console.log("You added additional infos to this task!")
    const target = _event.target as HTMLButtonElement
    let targetId: string = target.id;
    let newInfoTargetId: number = +targetId;
    let newInfoInput :  HTMLInputElement = <HTMLInputElement> document.getElementById("input"+targetId)
    let inputValue: string = newInfoInput.value;
    items[newInfoTargetId].info += ", " + inputValue;

    for(let a = 0; a<items.length; a++){
        const data = {
            name: items[a].name,
            person: items[a].person,
            date: items[a].date,
            info: items[a].info
          };
    
       let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Task");
        query.set("data", JSON.stringify(data));
    
        await fetch(url + "?"+ query);
    }
    location.reload();  
}

async function deleteTask(_event: Event): Promise<void>{
    console.log("You deleted this task!");
    const target = _event.target as HTMLButtonElement
    let targetId :string = target.id;
    let deletTargetId : number = +targetId;
    items.splice(deletTargetId, 1);
    console.log(deletTargetId);
    let formDelete : HTMLFormElement = <HTMLFormElement>document.getElementById("form"+targetId);
    formDelete.remove()
    let line: HTMLFormElement = <HTMLFormElement> document.getElementById("line"+deletTargetId);
    line.remove();
    console.log(data.Task);
    fetch(url+"?command=drop&collection=Task");
    
    fetch(url+"?command=create&collection=Task");

    for(let a = 0; a<items.length; a++){
        const data = {
            name: items[a].name,
            person: items[a].person,
            date: items[a].date,
            info: items[a].info
          };
    
       let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Task");
        query.set("data", JSON.stringify(data));
    
        await fetch(url + "?"+ query);
    }
    console.log(items)
    

}

function clearAllTasks(){
    for (let a = 0; a < items.length; a++){
        let deleteForm: HTMLFormElement = <HTMLFormElement> document.getElementById("form"+a);
        deleteForm.remove();
        let line: HTMLFormElement = <HTMLFormElement> document.getElementById("line"+a);
        line.remove();

    }
}

async function showTasks(): Promise<void>{

    for (let a = 0; a < items.length; a++) {
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
    newTaskNameLabel.textContent = items[a].name
    console.log(items[a].name)
    newTaskNameLabel.setAttribute("for", ""+a)
    newTaskNameLabel.style.fontSize = "x-large";
    newForm.appendChild(newTaskNameLabel);

    let newTaskPerson : HTMLElement = document.createElement("p");
    newTaskPerson.textContent = items[a].person;
    newForm.appendChild(newTaskPerson);

    let newTaskDate : HTMLElement = document.createElement("p");
    let newDate: Date = items[a].date
    newTaskDate.setAttribute("id", "date"+a);
    newTaskDate.textContent=newDate.toLocaleString()
    newForm.appendChild(newTaskDate)

    let additionalInofs: HTMLElement = document.createElement("h4");
    additionalInofs.textContent = "Addtional Infos:"
    newForm.appendChild(additionalInofs);

    let newTaskInfos : HTMLElement = document.createElement("p");
    newTaskInfos.textContent = items[a].info;
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
    //date();
}

