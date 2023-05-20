"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        name;
        type;
        sound;
        food;
        constructor(_name, _type, _sound, _food) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
        }
        sing() {
            let name = this.name + " the " + this.type + ": ";
            let song = "Old McDonald had a farm E-I-E-I-O. And on his farm he had a " + this.type + " E-I-E-I-O. With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Everywhere a " + this.sound + " " + this.sound + ". Old MacDonald had a farm E-I-E-I-O";
            return (name + "" + song);
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map