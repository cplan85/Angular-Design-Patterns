import { User } from "./user.model";

export class Employee extends User{

    employed: boolean;
    employer: string;
    money: number = 0;

    constructor(name: string, lastName: string, money: number=0, employer=''){
        super(name, lastName);
        this.employer = employer;
        this.employed = true;
        this.money = money;
    }
    payDay(money:number=0) {
        this.money += money;
    }
    }
    