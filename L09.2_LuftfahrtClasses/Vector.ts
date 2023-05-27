namespace LuftfahrtClasses{
    export class Vector{
        x : number;
        y: number;

        constructor(_x : number, _y:number){
            this.x = _x;
            this.y = _y;
        }

        add(_newX : number, _newY : number){
            this.x += _newX;
            this.y += _newY;
        }

        multiply(_factor : number){
            this.x *= _factor;
            this.y *= _factor;
        }
    }
}