"use strict";
/*
Aufgabe: A08.2 Luftfahrt
Name: Kevin Erne
Matrikel: 274303
Datum: 13.05.2023
Quellen: Keine
Anmerkungen: Ich hatte Probleme damit, das canvas responsive für verschiedene Bildschirme zu machen (wurde dann zu einer Pixelgrafik)
*/
window.addEventListener("load", handleLoad);
let crc2;
function handleLoad() {
    let canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    /*crc2.canvas.width = window.innerWidth;
    crc2.canvas.height = window.innerWidth;*/
    drawGround();
    drawMountains();
    sun();
    cloud();
    airfield();
    shop();
    paraglider();
    baloon();
    bugs();
}
function drawGround() {
    let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.2, "lightblue");
    gradient.addColorStop(0.6, "gray");
    gradient.addColorStop(1, "green");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
function drawMountains() {
    crc2.beginPath();
    crc2.moveTo(0, crc2.canvas.height * 0.6);
    let xStep = Math.random();
    let minStep = crc2.canvas.width / 8;
    let maxStep = crc2.canvas.width / 6;
    let min = crc2.canvas.height * 0.6;
    let max = crc2.canvas.height * 0.15;
    do {
        let x = xStep + (maxStep - minStep) * Math.random();
        xStep += x;
        let y = min - (min - max) * Math.random();
        crc2.lineTo(x, y);
    } while (xStep < crc2.canvas.width);
    crc2.lineTo(crc2.canvas.width, min - (min - max) * Math.random());
    crc2.lineTo(crc2.canvas.width, min);
    crc2.closePath();
    let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0.3, "white");
    gradient.addColorStop(0.5, "black");
    crc2.fillStyle = gradient;
    crc2.fill();
}
function sun() {
    let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 75);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "yellow");
    let min = 0;
    let max = crc2.canvas.height * 0.15;
    crc2.save();
    crc2.translate(crc2.canvas.width * Math.random(), (max - min) * Math.random());
    let sun = new Path2D;
    sun.arc(0, 0, 75, 0, 2 * Math.PI);
    crc2.fillStyle = gradient;
    crc2.fill(sun);
    crc2.restore();
}
function paraglider() {
    for (let n = 0; n < 6; n++) {
        let x = crc2.canvas.width * Math.random();
        let y = crc2.canvas.height * Math.random();
        let size = 60;
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + size, y);
        crc2.lineTo(x + size, y + size);
        crc2.closePath();
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
}
function baloon() {
    for (let n = 0; n < 4; n++) {
        let x = crc2.canvas.width * Math.random();
        let y = crc2.canvas.height * Math.random();
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(x - 25, y + 100, 50, 50);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x, y + 100);
        crc2.lineTo(x, y);
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(x, y, 50, 75, 0, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.fill();
        crc2.closePath();
    }
}
function airfield() {
    crc2.beginPath();
    crc2.moveTo(50, crc2.canvas.height - 250);
    crc2.lineTo(30, crc2.canvas.height - 175);
    crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height - 130);
    crc2.lineTo(crc2.canvas.width - 75, crc2.canvas.height - 200);
    crc2.fillStyle = "black";
    crc2.closePath;
    crc2.fill();
}
function shop() {
    crc2.save();
    crc2.translate(crc2.canvas.width / 2, crc2.canvas.height - 500);
    crc2.fillStyle = randomColor();
    crc2.fillRect(0, 0, 300, 200);
    crc2.fillStyle = randomColor();
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(150, -100);
    crc2.lineTo(300, 0);
    crc2.closePath();
    crc2.fill();
    crc2.font = "70px serif";
    crc2.fillStyle = "black";
    crc2.fillText("SHOP", 50, 100);
    crc2.restore();
}
function cloud() {
    let min = 0;
    let max = crc2.canvas.height * 0.15;
    crc2.save();
    crc2.translate(crc2.canvas.width * Math.random(), (max - min) * Math.random());
    for (let n = 0; n < 70; n++) {
        crc2.fillStyle = "RGBA(255, 255, 255, 0.3)";
        crc2.beginPath();
        crc2.ellipse(300 * Math.random(), 200 * Math.random(), 40, 40, 0, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    crc2.restore();
}
function bugs() {
    for (let n = 0; n < 20; n++) {
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width * Math.random(), crc2.canvas.height * Math.random(), 5, 5, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
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