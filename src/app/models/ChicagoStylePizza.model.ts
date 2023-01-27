import { Pizza } from './pizza.model';

export class ChicagoStylePizza extends Pizza{

    crustType: string = 'thick';
    constructor(toppings: string){
        super(toppings);
    }
    
    }
    