export class User{
    constructor(private firstName:string, private lastName:string){
    }
    hello(){
    return `Hello I am ${this.firstName} ${this.lastName}`
    }
    }
    