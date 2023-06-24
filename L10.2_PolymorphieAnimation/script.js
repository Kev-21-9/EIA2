"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    /*
    Aufgabe: A10.2 LuftfahrtPolymorphie
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 22.06.2023
    Quellen: Keine
    */
    window.addEventListener("load", handleLoad);
    let moveables = [];
    // let moveables : Moveable[] = [];
    // let moveables : Moveable[] = [];
    /*let sunVector : Vector = new Vector(2, 0)
    let sunObject : Aircraft = new Aircraft("sun", 0, 100,  "null");*/
    LuftfahrtClasses.personVector = new LuftfahrtClasses.Vector(0, -3);
    let imgData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        LuftfahrtClasses.crc2 = canvas.getContext("2d");
        /*crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerWidth;*/
        drawGround();
        drawMountains();
        cloud();
        airfield();
        shop();
        imgData = LuftfahrtClasses.crc2.getImageData(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
        for (let i = 0; i < 10; i++) {
            //let randomBugVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let bug = new LuftfahrtClasses.Bug("bug", LuftfahrtClasses.crc2.canvas.width * Math.random(), LuftfahrtClasses.crc2.canvas.height * Math.random(), "brown");
            moveables.push(bug);
        }
        for (let i = 0; i < 6; i++) {
            //let randomBaloonVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let balloon = new LuftfahrtClasses.Balloon("balloon", LuftfahrtClasses.crc2.canvas.width * Math.random(), LuftfahrtClasses.crc2.canvas.height * Math.random(), randomColor());
            moveables.push(balloon);
        }
        for (let i = 0; i < 6; i++) {
            //let randomParagliderVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let paraglider = new LuftfahrtClasses.Paraglider("paraglider", LuftfahrtClasses.crc2.canvas.width * Math.random(), LuftfahrtClasses.crc2.canvas.height * Math.random(), randomColor(), "paraglider");
            moveables.push(paraglider);
        }
        console.log(moveables);
        window.setInterval(animation, 50);
    }
    function animation() {
        LuftfahrtClasses.crc2.putImageData(imgData, 0, 0);
        sun();
        /*baloon();
        paraglider();
        bugs();*/
        for (let n = 0; n < moveables.length; n++) {
            moveables[n].movement();
            moveables[n].reset();
        }
    }
    function drawGround() {
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, LuftfahrtClasses.crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.6, "gray");
        gradient.addColorStop(1, "green");
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fillRect(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
    }
    function drawMountains() {
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(0, LuftfahrtClasses.crc2.canvas.height * 0.6);
        let xStep = Math.random();
        let minStep = LuftfahrtClasses.crc2.canvas.width / 8;
        let maxStep = LuftfahrtClasses.crc2.canvas.width / 6;
        let min = LuftfahrtClasses.crc2.canvas.height * 0.6;
        let max = LuftfahrtClasses.crc2.canvas.height * 0.15;
        do {
            let x = xStep + (maxStep - minStep) * Math.random();
            xStep += x;
            let y = min - (min - max) * Math.random();
            LuftfahrtClasses.crc2.lineTo(x, y);
        } while (xStep < LuftfahrtClasses.crc2.canvas.width);
        LuftfahrtClasses.crc2.lineTo(LuftfahrtClasses.crc2.canvas.width, min - (min - max) * Math.random());
        LuftfahrtClasses.crc2.lineTo(LuftfahrtClasses.crc2.canvas.width, min);
        LuftfahrtClasses.crc2.closePath();
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, LuftfahrtClasses.crc2.canvas.height);
        gradient.addColorStop(0.3, "white");
        gradient.addColorStop(0.5, "black");
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fill();
    }
    function sun() {
        let gradient = LuftfahrtClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, 75);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "yellow");
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(200, 300);
        let sun = new Path2D;
        sun.arc(0, 0, 75, 0, 2 * Math.PI);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fill(sun);
        LuftfahrtClasses.crc2.restore();
        /*sunObject.movement();
        sunObject.reset();*/
    }
    function airfield() {
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(50, LuftfahrtClasses.crc2.canvas.height - 250);
        LuftfahrtClasses.crc2.lineTo(30, LuftfahrtClasses.crc2.canvas.height - 175);
        LuftfahrtClasses.crc2.lineTo(LuftfahrtClasses.crc2.canvas.width - 50, LuftfahrtClasses.crc2.canvas.height - 130);
        LuftfahrtClasses.crc2.lineTo(LuftfahrtClasses.crc2.canvas.width - 75, LuftfahrtClasses.crc2.canvas.height - 200);
        LuftfahrtClasses.crc2.fillStyle = "black";
        LuftfahrtClasses.crc2.closePath;
        LuftfahrtClasses.crc2.fill();
    }
    function shop() {
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(LuftfahrtClasses.crc2.canvas.width / 2, LuftfahrtClasses.crc2.canvas.height - 500);
        LuftfahrtClasses.crc2.fillStyle = randomColor();
        LuftfahrtClasses.crc2.fillRect(0, 0, 300, 200);
        LuftfahrtClasses.crc2.fillStyle = randomColor();
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(0, 0);
        LuftfahrtClasses.crc2.lineTo(150, -100);
        LuftfahrtClasses.crc2.lineTo(300, 0);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.font = "70px serif";
        LuftfahrtClasses.crc2.fillStyle = "black";
        LuftfahrtClasses.crc2.fillText("SHOP", 50, 100);
        LuftfahrtClasses.crc2.restore();
    }
    function cloud() {
        let min = 0;
        let max = LuftfahrtClasses.crc2.canvas.height * 0.15;
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(LuftfahrtClasses.crc2.canvas.width * Math.random(), (max - min) * Math.random());
        for (let n = 0; n < 70; n++) {
            LuftfahrtClasses.crc2.fillStyle = "RGBA(255, 255, 255, 0.3)";
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.ellipse(300 * Math.random(), 200 * Math.random(), 40, 40, 0, 0, 2 * Math.PI);
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
        }
        LuftfahrtClasses.crc2.restore();
    }
    function randomColor() {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        return "rgb(" + r + "," + g + "," + b + ")";
    }
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=script.js.map