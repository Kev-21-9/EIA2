namespace LuftfahrtClasses{
    export class Aircraft{
        name : string;
        startingX : number;
        startingY : number;
        movementVector : Vector;
        
        color : string;

        constructor(_name : string, _startingX : number, _startingY : number,  _color : string){
            this.name = _name;
            this.startingX = _startingX;
            this.startingY = _startingY;
            this.movementVector = this.createVector();
            
            this.color = _color;
        }

        createVector() : Vector{
            let velocity : number = 5

            let randomVector : Vector = new Vector(velocity*Math.random(),velocity*Math.random());
            return randomVector;
        }

        movement(){
            this.startingX += this.movementVector.x;
            this.startingY += this.movementVector.y;
        }

        reset(){
            if(this.startingX>1180){
                this.startingX -=1180;
            }
            if(this.startingY>2020){
                this.startingY -= 2020;
            }
        }

        changeToPerson() : boolean {
            if(this.startingY > 1600){
                return true;
            }
            else{
                return false;
            }
        }

        changeToParaglider() : boolean{
            if(this.startingY < 300){
                return true;
            }
            else{
                return false;
            }
        }
    }
}