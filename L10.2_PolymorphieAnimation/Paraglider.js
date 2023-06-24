"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Paraglider extends LuftfahrtClasses.Moveable {
        type;
        constructor(_name, _startingX, _startingY, _color, _type) {
            super(_name, _startingX, _startingY, _color);
            this.type = _type;
        }
        changeToPerson() {
            if (this.startingY > 1600) {
                return true;
            }
            else {
                return false;
            }
        }
        changeToParaglider() {
            if (this.startingY < 300) {
                return true;
            }
            else {
                return false;
            }
        }
        movement() {
            super.movement();
            let size = 60;
            if (this.changeToPerson() == true && this.name == "paraglider") {
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.ellipse(this.startingX, this.startingY, 20, 20, 0, 0, 2 * Math.PI);
                LuftfahrtClasses.crc2.fillStyle = "pink";
                LuftfahrtClasses.crc2.fill();
                LuftfahrtClasses.crc2.closePath();
                this.movementVector.x = LuftfahrtClasses.personVector.x;
                this.movementVector.y = LuftfahrtClasses.personVector.y;
                this.name = "climber";
            }
            if (this.name == "climber") {
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY);
                LuftfahrtClasses.crc2.lineTo(this.startingX, this.startingY + 80);
                LuftfahrtClasses.crc2.lineWidth = 6;
                LuftfahrtClasses.crc2.strokeStyle = "black";
                LuftfahrtClasses.crc2.stroke();
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY + 80);
                LuftfahrtClasses.crc2.lineTo(this.startingX + 20, this.startingY + 100);
                LuftfahrtClasses.crc2.lineWidth = 6;
                LuftfahrtClasses.crc2.strokeStyle = "black";
                LuftfahrtClasses.crc2.stroke();
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY + 80);
                LuftfahrtClasses.crc2.lineTo(this.startingX - 20, this.startingY + 100);
                LuftfahrtClasses.crc2.lineWidth = 6;
                LuftfahrtClasses.crc2.strokeStyle = "black";
                LuftfahrtClasses.crc2.stroke();
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY + 60);
                LuftfahrtClasses.crc2.lineTo(this.startingX - 20, this.startingY + 40);
                LuftfahrtClasses.crc2.lineWidth = 6;
                LuftfahrtClasses.crc2.strokeStyle = "black";
                LuftfahrtClasses.crc2.stroke();
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY + 60);
                LuftfahrtClasses.crc2.lineTo(this.startingX + 20, this.startingY + 40);
                LuftfahrtClasses.crc2.lineWidth = 6;
                LuftfahrtClasses.crc2.strokeStyle = "black";
                LuftfahrtClasses.crc2.stroke();
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.ellipse(this.startingX, this.startingY, 30, 30, 0, 0, 2 * Math.PI);
                LuftfahrtClasses.crc2.fillStyle = "pink";
                LuftfahrtClasses.crc2.fill();
                LuftfahrtClasses.crc2.closePath();
                this.movementVector.x = LuftfahrtClasses.personVector.x;
                this.movementVector.y = LuftfahrtClasses.personVector.y;
                //this.name="climber"
            }
            if (this.changeToParaglider() == true && this.name == "climber") {
                this.name = "paraglider";
                this.movementVector.x = this.createVector().x;
                this.movementVector.y = this.createVector().y;
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY);
                LuftfahrtClasses.crc2.lineTo(this.startingX + size, this.startingY);
                LuftfahrtClasses.crc2.lineTo(this.startingX + size, this.startingY + size);
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.fillStyle = this.color;
                LuftfahrtClasses.crc2.fill();
            }
            if (this.name == "paraglider") {
                LuftfahrtClasses.crc2.beginPath();
                LuftfahrtClasses.crc2.moveTo(this.startingX, this.startingY);
                LuftfahrtClasses.crc2.lineTo(this.startingX + size, this.startingY);
                LuftfahrtClasses.crc2.lineTo(this.startingX + size, this.startingY + size);
                LuftfahrtClasses.crc2.closePath();
                LuftfahrtClasses.crc2.fillStyle = this.color;
                LuftfahrtClasses.crc2.fill();
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
    LuftfahrtClasses.Paraglider = Paraglider;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map