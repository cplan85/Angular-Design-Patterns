import { Pizza } from './pizza.model';

export class NYStylePizza extends Pizza{

    crustType: string = 'thin';
    constructor(toppings: string){
        super(toppings);
    }
    
    }
    