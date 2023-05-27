"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_newX, _newY) {
            this.x += _newX;
            this.y += _newY;
        }
        multiply(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
    }
    LuftfahrtClasses.Vector = Vector;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Vector.js.map