
window.addEventListener("load", handleLoad);

let newCustomEvent: CustomEvent = new CustomEvent("btnCustomEvent", {bubbles: true, detail: {Button: "Hey you clicked me!"}});
document.addEventListener("btnCustomEvent", e =>{
    console.log("Button", e.detail)
})
document.dispatchEvent(newCustomEvent);

function handleLoad(): void{
    document.addEventListener("mousemove", setInfoBox );
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

}

function setInfoBox(_event: MouseEvent): void{
    let _spancursor :HTMLElement =<HTMLElement> document.getElementById("spann");
    let mouseX : number = _event.clientX;
    let mouseY: number = _event.clientY;
    _spancursor.textContent = "mouseposition x: "+ mouseX + " y: " + mouseY;
    _spancursor.style.top = mouseY + 10 + "px";
    _spancursor.style.left= mouseX + 10 + "px";
}

function logInfo(_event:Event): void{
    console.log( _event.currentTarget);
    console.log(_event);
    console.log(_event.target);
    console.log(_event.type);
}


