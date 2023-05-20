"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Food {
        name;
        amount;
        constructor(_name, _amount) {
            this.name = _name;
            this.amount = _amount;
        }
        add(_newFoodAmount) {
            this.amount += _newFoodAmount;
        }
        minus() {
            this.amount--;
        }
    }
    OldMacDonaldsFarm.Food = Food;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Food.js.map