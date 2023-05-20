namespace OldMacDonaldsFarm{
    export class Food{
        name: string;
        amount: number;

        constructor(_name : string, _amount : number){
            this.name = _name;
            this.amount = _amount;
        }

        add(_newFoodAmount : number){
            this.amount += _newFoodAmount;
        }

        minus() :void{
            this.amount--;
        }
    }
}