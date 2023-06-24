namespace LuftfahrtClasses{
    export class Bug extends Moveable{
        constructor(_name : string, _startingX : number, _startingY : number,  _color : string){
            super(_name, _startingX, _startingY, _color);
            
        }
        movement(): void {
            super.movement();
            crc2.beginPath();
            crc2.ellipse(this.startingX, this.startingY, 10, 10, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            
        }
    }
}