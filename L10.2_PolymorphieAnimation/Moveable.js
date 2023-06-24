"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Moveable {
        name;
        startingX;
        startingY;
        movementVector;
        color;
        constructor(_name, _startingX, _startingY, _color) {
            this.name = _name;
            this.startingX = _startingX;
            this.startingY = _startingY;
            this.movementVector = this.createVector();
            this.color = _color;
        }
        createVector() {
            let velocity = 5;
            let randomVector = new LuftfahrtClasses.Vector(velocity * Math.random(), velocity * Math.random());
            return randomVector;
        }
        movement() {
            this.startingX += this.movementVector.x;
            this.startingY += this.movementVector.y;
        }
        reset() {
            if (this.startingX > 1180) {
                this.startingX -= 1180;
            }
            if (this.startingY > 2020) {
                this.startingY -= 2020;
            }
        }
    }
    LuftfahrtClasses.Moveable = Moveable;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Moveable.js.map