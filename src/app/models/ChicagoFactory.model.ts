import { ChicagoStylePizza } from './ChicagoStylePizza.model';
import { PizzaFactory } from './pizzaFactory.model';

export class ChicagoFactory extends PizzaFactory{

    toppings:string ="";
    constructor(toppings: string){
        super();
        this.toppings = toppings;
    }
    createPizza() {
        return new ChicagoStylePizza(this.toppings);
        }
    }
    