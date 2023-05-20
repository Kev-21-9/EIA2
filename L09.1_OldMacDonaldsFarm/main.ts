


namespace OldMacDonaldsFarm {
    /*
    Aufgabe: A09.1 OldMacDonaldsFarm
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 20.05.2023
    Quellen: Keine
    */

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    let animals: Animal[];
    let foodArray: Food[];

    let n: number = 0;
    let width: number;
    let height: number;



    function handleLoad(): void { 

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");


        if (!canvas)
            return


        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        height = crc2.canvas.height;
        width = crc2.canvas.width;

        let nextDayBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nextDayBtn")
        nextDayBtn.addEventListener("click", nextDay);

        let weed: Food = new Food("weed", 3);
        let meat: Food = new Food("meat", 3);
        let grass: Food = new Food("grass", 2);
        let grains: Food = new Food("grains", 4);

        foodArray = [weed, meat, grass, grains];


        let pig: Animal = new Animal("Luca", "pig", "oink", weed);
        let dog: Animal = new Animal("Dean", "dog", "woof", meat);
        let sheep: Animal = new Animal("Susan", "sheep", "määh", grass);
        let duck: Animal = new Animal("Daisy", "duck", "quack", grains);
        let cat: Animal = new Animal("Cal", "cat", "miau", meat);

        animals = [pig, dog, sheep, duck, cat];

        window.setInterval(singing, 9000);
        singing(); //damit Text sofort startet und nicht erst nach 8000ms
        //drawPic();

    }

    function drawPic(): void {
        drawGround();
        house();
        silos();
        

    }

    function singing(): void {
        drawPic();

        if (animals[n].type === "pig") {
            pig();
        }
        if (animals[n].type === "dog") {
            dog();
        }
        if (animals[n].type === "sheep") {
            sheep();
        }
        if (animals[n].type === "duck") {
            duck();
        }
        if (animals[n].type === "cat") {
            cat();
        }
        crc2.font = "20px serif";
        crc2.fillStyle = "black";
        crc2.fillText(animals[n].sing(), 50, crc2.canvas.height *0.95);
        n++;

        console.log(animals[n].food.amount);
        animals[n].food.minus();
        console.log(animals[n].food.amount);
    }

    function drawGround(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.4, "gray");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function house(): void {
        crc2.save();
        crc2.translate(width * 0.6, height * 0.5);

        crc2.fillStyle = "red";
        crc2.fillRect(0, 0, 400, 200);

        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(200, -100);
        crc2.lineTo(400, 0);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(150, 200);
        crc2.lineTo(150, 100);
        crc2.lineTo(250, 100);
        crc2.lineTo(250, 200);
        crc2.closePath();
        crc2.fill();

        crc2.restore();
    }

    function silos(): void {
        crc2.save();
        let row: number = 50;
        let a: number = 0;

        for (let i = 0; i < foodArray.length; i++) {
            crc2.save();
            crc2.translate(row, height * 0.1)
            crc2.fillStyle = "red";

            crc2.fillRect(0, 0, 150, 500);
            row += 200

            let siloHeight: number = -foodArray[a].amount * 100;
            if (siloHeight > 0) {
                siloHeight = 0;
            }
            crc2.fillStyle = "yellow";
            crc2.fillRect(25, 500, 100, siloHeight);

            console.log(row);

            crc2.font = "30px serif";
            crc2.fillStyle = "black";
            crc2.fillText(foodArray[a].name, 25, 50);

            crc2.restore();
            a++;
        }

    }

    function pig(): void {
        crc2.save();
        crc2.translate(width / 2, height * 0.8);

        crc2.fillStyle = "pink";

        crc2.ellipse(0, 0, 125, 75, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "red"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-100, -25, 60, 60, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(-125, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-90, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "pink"
        crc2.strokeStyle = "red"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-110, -5, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-120, -100, 25, 40, -60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-60, -100, 25, 40, 60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "pink";
        crc2.lineWidth = 5;

        crc2.moveTo(-50, 50);
        crc2.lineTo(-65, 100);
        crc2.stroke();

        crc2.moveTo(-60, 50);
        crc2.lineTo(-75, 100);
        crc2.stroke();

        crc2.moveTo(50, 50);
        crc2.lineTo(65, 100);
        crc2.stroke();

        crc2.moveTo(60, 50);
        crc2.lineTo(75, 100);
        crc2.stroke();


        crc2.restore();
    }

    function dog(): void {
        crc2.save();
        crc2.translate(width / 2, height * 0.8);


        crc2.beginPath();
        crc2.ellipse(0, 0, 125, 55, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-100, -25, 50, 60, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(-125, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-90, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "brown"
        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-110, 5, 35, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-120, -100, 15, 40, -60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-60, -100, 15, 40, 60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;

        crc2.moveTo(-50, 50);
        crc2.lineTo(-65, 100);
        crc2.stroke();

        crc2.moveTo(-60, 50);
        crc2.lineTo(-75, 100);
        crc2.stroke();

        crc2.moveTo(50, 50);
        crc2.lineTo(65, 100);
        crc2.stroke();

        crc2.moveTo(60, 50);
        crc2.lineTo(75, 100);
        crc2.stroke();

        crc2.restore();
    }

    function sheep(): void {
        crc2.save();
        crc2.translate(width / 2, height * 0.8);

        crc2.fillStyle = "white";

        crc2.ellipse(0, 0, 125, 100, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-100, -25, 60, 60, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(-125, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-90, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "white"
        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-110, 5, 10, 10, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-120, -90, 15, 20, -60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-60, -90, 15, 20, 60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;

        crc2.moveTo(-50, 50);
        crc2.lineTo(-65, 100);
        crc2.stroke();

        crc2.moveTo(-60, 50);
        crc2.lineTo(-75, 100);
        crc2.stroke();

        crc2.moveTo(50, 50);
        crc2.lineTo(65, 100);
        crc2.stroke();

        crc2.moveTo(60, 50);
        crc2.lineTo(75, 100);
        crc2.stroke();


        crc2.restore();
    }

    function duck(): void {
        crc2.save();
        crc2.translate(width / 2, height * 0.8);

        crc2.beginPath();
        crc2.ellipse(0, 0, 50, 50, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-10, -50, 10, 70, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-20, -100, 25, 25, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-10, -105, 5, 5, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-30, -105, 5, 5, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(-20, -95);
        crc2.lineTo(-50, -90);
        crc2.lineTo(-20, -85);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();

        crc2.beginPath();
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;

        crc2.moveTo(-5, 15);
        crc2.lineTo(-15, 80);
        crc2.stroke();

        crc2.moveTo(5, 15);
        crc2.lineTo(15, 80);
        crc2.stroke();

        crc2.restore();
    }

    function cat(): void {
        crc2.save();
        crc2.translate(width / 2, height * 0.8);


        crc2.beginPath();
        crc2.ellipse(0, 0, 125, 55, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();

        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-100, -25, 50, 60, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(-125, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-90, -40, 15, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "orange"
        crc2.strokeStyle = "black"
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.ellipse(-110, 5, 35, 15, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-120, -100, 15, 40, -60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(-60, -100, 15, 40, 60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "orange";
        crc2.lineWidth = 5;

        crc2.moveTo(-50, 50);
        crc2.lineTo(-65, 100);
        crc2.stroke();

        crc2.moveTo(-60, 50);
        crc2.lineTo(-75, 100);
        crc2.stroke();

        crc2.moveTo(50, 50);
        crc2.lineTo(65, 100);
        crc2.stroke();

        crc2.moveTo(60, 50);
        crc2.lineTo(75, 100);
        crc2.stroke();

        crc2.restore();
    }

    //funktioniert leider noch nicht perfekt, weil ich den Interval, der beim Load aufgerufen wurde, nicht gestoppt bekomme
    function nextDay(): void {
        n = 0;
        window.setInterval(singing, 9000);
        singing();
    }
}