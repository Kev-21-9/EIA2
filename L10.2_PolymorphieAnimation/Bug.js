"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Bug extends LuftfahrtClasses.Moveable {
        constructor(_name, _startingX, _startingY, _color) {
            super(_name, _startingX, _startingY, _color);
        }
        movement() {
            super.movement();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.ellipse(this.startingX, this.startingY, 10, 10, 0, 0, 2 * Math.PI);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = this.color;
            LuftfahrtClasses.crc2.fill();
        }
    }
    LuftfahrtClasses.Bug = Bug;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Bug.js.map