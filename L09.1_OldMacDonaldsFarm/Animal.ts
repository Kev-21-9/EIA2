
namespace OldMacDonaldsFarm {
    export class Animal {
        name: string;
        type: string;
        sound : string;
        food : Food;

        constructor(_name: string, _type: string,_sound : string, _food: Food) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound
            this.food = _food;
        }

        sing(): string {
            let name : string = this.name + " the "+ this.type+": ";
            let song : string = "Old McDonald had a farm E-I-E-I-O. And on his farm he had a "+this.type+" E-I-E-I-O. With a "+this.sound+" " + this.sound+" here and a "+this.sound+" " + this.sound+" there. Everywhere a "+this.sound+" " + this.sound+". Old MacDonald had a farm E-I-E-I-O";
            return (name +"" + song);
        }
    }
}