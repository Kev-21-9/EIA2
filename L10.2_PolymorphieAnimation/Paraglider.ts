namespace LuftfahrtClasses{
    export class Paraglider extends Moveable{
        type : string;

        constructor(_name : string, _startingX : number, _startingY : number,  _color : string, _type : string){
            super(_name, _startingX, _startingY, _color);
            this.type = _type;
        }

        changeToPerson() : boolean {
            if(this.startingY > 1600){
                return true;
            }
            else{
                return false;
            }
        }

        changeToParaglider() : boolean{
            if(this.startingY < 300){
                return true;
            }
            else{
                return false;
            }
        }

        movement(): void {
            super.movement();
            let size: number = 60;
            if(this.changeToPerson() == true && this.name == "paraglider"){
                crc2.beginPath();
                crc2.ellipse(this.startingX, this.startingY, 20, 20, 0, 0, 2 * Math.PI);
                crc2.fillStyle = "pink";
                crc2.fill();
                crc2.closePath();
                this.movementVector.x = personVector.x;
                this.movementVector.y = personVector.y;
                this.name="climber"
                
            }
            if(this.name == "climber"){
                crc2.beginPath();
                crc2.moveTo(this.startingX,this.startingY);
                crc2.lineTo(this.startingX, this.startingY+80);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black"
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.startingX,this.startingY+80);
                crc2.lineTo(this.startingX+20, this.startingY+100);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black"
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.startingX,this.startingY+80);
                crc2.lineTo(this.startingX-20, this.startingY+100);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black"
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.startingX,this.startingY+60);
                crc2.lineTo(this.startingX-20, this.startingY+40);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black"
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.startingX,this.startingY+60);
                crc2.lineTo(this.startingX+20, this.startingY+40);
                crc2.lineWidth = 6;
                crc2.strokeStyle = "black"
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.ellipse(this.startingX, this.startingY, 30, 30, 0, 0, 2 * Math.PI);
                crc2.fillStyle = "pink";
                crc2.fill();
                crc2.closePath();

                
                this.movementVector.x = personVector.x;
                this.movementVector.y = personVector.y;
                //this.name="climber"
            }
            if(this.changeToParaglider() == true && this.name == "climber"){
                this.name = "paraglider";
                this.movementVector.x = this.createVector().x;
                this.movementVector.y = this.createVector().y;
                crc2.beginPath();
                crc2.moveTo(this.startingX, this.startingY);
                crc2.lineTo(this.startingX + size, this.startingY);
                crc2.lineTo(this.startingX + size, this.startingY + size);
                crc2.closePath();
                crc2.fillStyle = this.color;
                crc2.fill();
            }
            if(this.name == "paraglider"){
                crc2.beginPath();
                crc2.moveTo(this.startingX, this.startingY);
                crc2.lineTo(this.startingX + size, this.startingY);
                crc2.lineTo(this.startingX + size, this.startingY + size);
                crc2.closePath();
                crc2.fillStyle = this.color;
                crc2.fill();
                
            }


            /*crc2.beginPath();
            crc2.moveTo(this.startingX, this.startingY);
            crc2.lineTo(this.startingX + size, this.startingY);
            crc2.lineTo(this.startingX + size, this.startingY + size);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();*/

            this.reset();
        }
        
    }
}