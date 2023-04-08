/*
Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Kevin Erne>
Matrikel: <274303>
Datum: <08.04.2023>
Quellen: <Keine>
*/

window.addEventListener("load", handleLoad);

function handleLoad():void{
    date();

    let newTaskBtn : HTMLButtonElement = <HTMLButtonElement> document.getElementById("addBtn");
    newTaskBtn.addEventListener("click", addNewTask)

    let newInfoBtn : HTMLButtonElement = <HTMLButtonElement> document.querySelector(".addInfoBtn");
    newInfoBtn.addEventListener("click", addNewInfo);

    let checkbox : HTMLInputElement = <HTMLInputElement> document.querySelector(".taskDone");
    checkbox.addEventListener("click", deleteTask);
}

function addNewTask(){
    console.log("You added a new task!");
}

function date(){
    let date :Date = new Date();

    let dateInput : HTMLInputElement = <HTMLInputElement> document.getElementById("oldDate")
    let oldDate : Date = new Date(dateInput.value);

    if (date>oldDate){
        console.log("Your task is overdue!");
    }
}

function addNewInfo():void{
    console.log("You added additional infos to this task!")
}

function deleteTask(): void{
    console.log("You deleted this task!");
}