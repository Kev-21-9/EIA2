"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Balloon extends LuftfahrtClasses.Moveable {
        constructor(_name, _startingX, _startingY, _color) {
            super(_name, _startingX, _startingY, _color);
        }
        movement() {
            super.movement();
            let x = this.startingX;
            let y = this.startingY;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.fillStyle = "brown";
            LuftfahrtClasses.crc2.fillRect(x - 25, y + 100, 50, 50);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(x, y + 100);
            LuftfahrtClasses.crc2.lineTo(x, y);
            LuftfahrtClasses.crc2.strokeStyle = "brown";
            LuftfahrtClasses.crc2.lineWidth = 5;
            LuftfahrtClasses.crc2.stroke();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.ellipse(x, y, 50, 75, 0, 0, 2 * Math.PI);
            LuftfahrtClasses.crc2.fillStyle = this.color;
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
        }
    }
    LuftfahrtClasses.Balloon = Balloon;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Balloon.js.map