namespace LuftfahrtClasses{
    export class Balloon extends Moveable{
        constructor(_name : string, _startingX : number, _startingY : number,  _color : string){
            super(_name, _startingX, _startingY, _color);
            
        }

        public movement(): void {
            super.movement();
            let x: number = this.startingX;
            let y: number = this.startingY;

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
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

        }
    }
}