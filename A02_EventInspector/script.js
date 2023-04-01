"use strict";
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let _spancursor = document.getElementById("spann");
    let mouseX = _event.clientX;
    let mouseY = _event.clientY;
    _spancursor.textContent = "mouseposition x: " + mouseX + " y: " + mouseY;
    _spancursor.style.top = mouseY + 10 + "px";
    _spancursor.style.left = mouseX + 10 + "px";
}
function logInfo(_event) {
    console.log(_event.currentTarget);
    console.log(_event);
    console.log(_event.target);
    console.log(_event.type);
}
function output() {
    console.log("Button clicked");
}
//# sourceMappingURL=script.js.map