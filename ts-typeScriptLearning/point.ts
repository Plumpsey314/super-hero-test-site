export class Point{
    name: string;
    constructor(private x: number, private y: number, n?: string){
        this.name = n;
    }


    distanceToP(p: Point){
        return Math.sqrt((p.x-this.x)*(p.x-this.x)+(p.y-this.y)*(p.y-this.y));
    }
    logName(){
        console.log(this.name);
    }

    /**
     * Allows you to get the x variable
     */
    get X(){
        return this.x;
    }

    /**
     * Allows you to set the x variable
     */
    set X(num){
        if (num < 0){
            throw new Error("No negatives")
        } 
        this.x = num;
    }

}