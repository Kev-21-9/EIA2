namespace LuftfahrtClasses {
    /*
    Aufgabe: A11 LuftfahrtInteraktiv
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 29.06.2023
    Quellen: Keine
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moveables : Moveable[] = [];
    let wind : number = 0;
    let time : string = "day";

    export let personVector : Vector = new Vector(0, -3);

    let imgData : ImageData;
    
    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");


        if (!canvas)
            return

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        document.addEventListener("keydown", checkArrowKey);
        document.addEventListener("click", changeTime);

        drawGround();
        drawMountains();
        cloud();
        airfield();
        shop();

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i : number = 0; i < 10; i++) {
            let bug : Bug = new Bug("bug", crc2.canvas.width*Math.random(), crc2.canvas.height*Math.random(),"brown") 
            moveables.push(bug);
        }
        for (let i : number = 0; i < 6; i++) {
            let balloon : Balloon = new Balloon("balloon", crc2.canvas.width*Math.random(), crc2.canvas.height*Math.random(),  randomColor()) 
            moveables.push(balloon);
        }
        for (let i : number = 0; i < 6; i++) {
            let paraglider : Paraglider = new Paraglider("paraglider", crc2.canvas.width*Math.random(), crc2.canvas.height*Math.random(), randomColor(), "paraglider") 
            moveables.push(paraglider);
        }
        console.log(moveables);
        window.setInterval(animation, 50);
    }

    function checkArrowKey(_event : KeyboardEvent){
        if (_event.key === "ArrowLeft" ) {
            windChanging(-1);   
        }
        if (_event.key === "ArrowRight" ) {
            windChanging(1);
        }
    }

    function changeTime(_event : MouseEvent){
        let mouseX : number = _event.clientX;
        let mouseY : number = _event.clientY

        if (mouseX > 125 && mouseX<275 && mouseY>225 && mouseY<375){
            if(time === "day"){
                time = "night";
            }
            else{
                time = "day";
            } 
        }
    }

    function windChanging(_windChange : number){
        wind += _windChange;
        
        for (let n = 0; n < moveables.length; n++) {
            moveables[n].multiply(wind);
        }
        wind = 0;
    }

    function animation() : void{
        crc2.putImageData(imgData, 0, 0);
        if(time === "day"){
            sun();
        }
        if(time === "night"){
            moon();
        }
        for (let n = 0; n < moveables.length; n++) {
            moveables[n].movement();
            moveables[n].reset(); 
        }
    }

    function drawGround(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.6, "gray");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawMountains(): void {
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height * 0.6);

        let xStep: number = Math.random();
        let minStep: number = crc2.canvas.width / 8
        let maxStep: number = crc2.canvas.width / 6
        let min: number = crc2.canvas.height * 0.6;
        let max: number = crc2.canvas.height * 0.15;

        do {
            let x: number = xStep + (maxStep - minStep) * Math.random();
            xStep += x;

            let y: number = min - (min - max) * Math.random();
            crc2.lineTo(x, y);
        }
        while (xStep < crc2.canvas.width)

        crc2.lineTo(crc2.canvas.width, min - (min - max) * Math.random());
        crc2.lineTo(crc2.canvas.width, min);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.3, "white");
        gradient.addColorStop(0.5, "black");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function sun(): void {
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 75);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "yellow");

        crc2.save();
        crc2.translate(200, 300);

        let sun: Path2D = new Path2D;
        sun.arc(0, 0, 75, 0, 2 * Math.PI);

        crc2.fillStyle = gradient;
        crc2.fill(sun)
        crc2.restore();
    }

    function moon(): void {
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 75);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightblue");

        crc2.save();
        crc2.translate(200, 300);

        let sun: Path2D = new Path2D;
        sun.arc(0, 0, 75, 0, 2 * Math.PI);

        crc2.fillStyle = gradient;
        crc2.fill(sun)
        crc2.restore();
    }

    function airfield(): void {
        crc2.beginPath();
        crc2.moveTo(50, crc2.canvas.height - 250);
        crc2.lineTo(30, crc2.canvas.height - 175)
        crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height - 130)
        crc2.lineTo(crc2.canvas.width - 75, crc2.canvas.height - 200);
        crc2.fillStyle = "black";
        crc2.closePath;

        crc2.fill();
    }

    function shop(): void {
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
        crc2.fill()

        crc2.font = "70px serif";
        crc2.fillStyle = "black"
        crc2.fillText("SHOP", 50, 100);

        crc2.restore();
    }

    function cloud(): void {
        let min: number = 0;
        let max: number = crc2.canvas.height * 0.15

        crc2.save();
        crc2.translate(crc2.canvas.width * Math.random(), (max - min) * Math.random())

        for (let n = 0; n < 70; n++) {
            crc2.fillStyle = "RGBA(255, 255, 255, 0.3)";
            crc2.beginPath();
            crc2.ellipse(300 * Math.random(), 200 * Math.random(), 40, 40, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }

        crc2.restore();
    }

    function randomColor(): string {
        let r: number = Math.random() * 256;
        let g: number = Math.random() * 256;
        let b: number = Math.random() * 256;

        return "rgb(" + r + "," + g + "," + b + ")";
    }
}

