export class NumberString{

    public num: number;
    public str: string[];

    constructor() {

    }

    setNumberPair (user:number, plan: string[]){
        this.num=user;
        this.str=plan;
        console.log(this.str);
    }
}