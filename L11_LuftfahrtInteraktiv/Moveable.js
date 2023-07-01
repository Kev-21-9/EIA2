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
            if (this.startingX < 0) {
                this.startingX += 1180;
            }
        }
        multiply(_windChange) {
            if (_windChange >= 0) {
                if (this.movementVector.x < 0) {
                    this.movementVector.x *= -1;
                }
            }
            else {
                if (this.movementVector.x > 0) {
                    this.movementVector.x *= -1;
                }
            }
        }
    }
    LuftfahrtClasses.Moveable = Moveable;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Moveable.js.map