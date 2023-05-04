"use strict";
window.addEventListener("load", handleLoad);
let crc2;
function handleLoad() {
    console.log("Window loaded");
    let canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    drawGround();
    drawBackground();
    drawFront();
}
function drawGround() {
    crc2.fillStyle = randomColor();
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
function drawBackground() {
    let particle = new Path2D;
    particle.arc(0, 0, 100, 0, 2 * Math.PI);
    crc2.save();
    for (let n = 0; n < 30; n++) {
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 100);
        crc2.save();
        crc2.translate(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        gradient.addColorStop(0, randomColor());
        gradient.addColorStop(1, randomColor());
        crc2.fillStyle = gradient;
        //crc2.fillStyle=randomColor();
        crc2.fill(particle);
        crc2.restore();
    }
    crc2.restore();
}
function drawFront() {
    for (let a = 0; a < 10; a++) {
        crc2.beginPath();
        crc2.moveTo(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        crc2.lineTo(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        crc2.lineTo(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
}
function randomColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return "rgb(" + r + "," + g + "," + b + ")";
}
//# sourceMappingURL=script.js.map