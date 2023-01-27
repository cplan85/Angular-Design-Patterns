import { User } from "./user.model";

export class Shopper extends User{

    employed = false;
    money: number = 0;
    constructor(name: string, lastName: string, money: number=0){
        super(name, lastName);
        this.money = money;
    }
    
    }
    