"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    /*
    Aufgabe: A09.2 Luftfahrt
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 25.05.2023
    Quellen: Keine
    */
    window.addEventListener("load", handleLoad);
    let crc2;
    let bugsArray = [];
    let balloonArray = [];
    let paragliderArray = [];
    /*let sunVector : Vector = new Vector(2, 0)
    let sunObject : Aircraft = new Aircraft("sun", 0, 100,  "null");*/
    let personVector = new LuftfahrtClasses.Vector(0, -3);
    let imgData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        /*crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerWidth;*/
        drawGround();
        drawMountains();
        cloud();
        airfield();
        shop();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        /*let velocity : number = 5

        let randomVector1 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVector2 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVector3 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVector4 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVector5 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVector6 : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
        let randomVectorArray : Vector[] = [randomVector1, randomVector2, randomVector3, randomVector4, randomVector5, randomVector6];*/
        for (let i = 0; i < 10; i++) {
            //let randomBugVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let bug = new LuftfahrtClasses.Aircraft("bug", crc2.canvas.width * Math.random(), crc2.canvas.height * Math.random(), "brown");
            bugsArray.push(bug);
        }
        for (let i = 0; i < 6; i++) {
            //let randomBaloonVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let balloon = new LuftfahrtClasses.Aircraft("balloon", crc2.canvas.width * Math.random(), crc2.canvas.height * Math.random(), randomColor());
            balloonArray.push(balloon);
        }
        for (let i = 0; i < 6; i++) {
            //let randomParagliderVector : Vector = randomVectorArray[Math.floor(6*Math.random())]
            let paraglider = new LuftfahrtClasses.Aircraft("paraglider", crc2.canvas.width * Math.random(), crc2.canvas.height * Math.random(), randomColor());
            paragliderArray.push(paraglider);
        }
        console.log(bugsArray);
        window.setInterval(animation, 50);
    }
    function animation() {
        crc2.putImageData(imgData, 0, 0);
        sun();
        baloon();
        paraglider();
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
        crc2.save();
        crc2.translate(200, 300);
        let sun = new Path2D;
        sun.arc(0, 0, 75, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill(sun);
        crc2.restore();
        /*sunObject.movement();
        sunObject.reset();*/
    }
    function paraglider() {
        //let randomVector7 : Vector = new Vector(7*Math.random(),7*Math.random());
        for (let n = 0; n < paragliderArray.length; n++) {
            let x = paragliderArray[n].startingX;
            let y = paragliderArray[n].startingY;
            let size = 60;
            if (paragliderArray[n].changeToPerson() == true && paragliderArray[n].name == "paraglider") {
                crc2.beginPath();
                crc2.ellipse(x, y, 20, 20, 0, 0, 2 * Math.PI);
                crc2.fillStyle = "pink";
                crc2.fill();
                crc2.closePath();
                paragliderArray[n].movementVector.x = personVector.x;
                paragliderArray[n].movementVector.y = personVector.y;
                paragliderArray[n].name = "climber";
            }
            if (paragliderArray[n].name == "climber") {
                crc2.beginPath();
                crc2.moveTo(x, y);
                crc2.lineTo(x, y + 80);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(x, y + 80);
                crc2.lineTo(x + 20, y + 100);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(x, y + 80);
                crc2.lineTo(x - 20, y + 100);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(x, y + 60);
                crc2.lineTo(x - 20, y + 40);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(x, y + 60);
                crc2.lineTo(x + 20, y + 40);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.ellipse(x, y, 30, 30, 0, 0, 2 * Math.PI);
                crc2.fillStyle = "pink";
                crc2.fill();
                crc2.closePath();
                paragliderArray[n].movementVector.x = personVector.x;
                paragliderArray[n].movementVector.y = personVector.y;
                //paragliderArray[n].name="climber"
            }
            if (paragliderArray[n].changeToParaglider() == true && paragliderArray[n].name == "climber") {
                paragliderArray[n].name = "paraglider";
                paragliderArray[n].movementVector.x = paragliderArray[n].createVector().x;
                paragliderArray[n].movementVector.y = paragliderArray[n].createVector().y;
                crc2.beginPath();
                crc2.moveTo(x, y);
                crc2.lineTo(x + size, y);
                crc2.lineTo(x + size, y + size);
                crc2.closePath();
                crc2.fillStyle = paragliderArray[n].color;
                crc2.fill();
            }
            if (paragliderArray[n].name == "paraglider") {
                crc2.beginPath();
                crc2.moveTo(x, y);
                crc2.lineTo(x + size, y);
                crc2.lineTo(x + size, y + size);
                crc2.closePath();
                crc2.fillStyle = paragliderArray[n].color;
                crc2.fill();
            }
            /*crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + size, y);
            crc2.lineTo(x + size, y + size);
            crc2.closePath();
            crc2.fillStyle = paragliderArray[n].color;
            crc2.fill();*/
            paragliderArray[n].movement();
            paragliderArray[n].reset();
        }
    }
    function baloon() {
        for (let n = 0; n < balloonArray.length; n++) {
            let x = balloonArray[n].startingX;
            let y = balloonArray[n].startingY;
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
            crc2.fillStyle = balloonArray[n].color;
            crc2.fill();
            crc2.closePath();
            balloonArray[n].movement();
            balloonArray[n].reset();
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
        for (let n = 0; n < 10; n++) {
            crc2.beginPath();
            crc2.ellipse(bugsArray[n].startingX, bugsArray[n].startingY, 10, 10, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = bugsArray[n].color;
            crc2.fill();
            bugsArray[n].movement();
            bugsArray[n].reset();
        }
    }
    function randomColor() {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        return "rgb(" + r + "," + g + "," + b + ")";
    }
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=script.js.map