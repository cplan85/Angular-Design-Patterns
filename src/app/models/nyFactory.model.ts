import { PizzaFactory } from './pizzaFactory.model';
import { NYStylePizza } from './NYStylePizza.model';

export class NYFactory extends PizzaFactory{

    toppings:string ="";
    constructor(toppings: string){
        super();
        this.toppings = toppings;
    }
    createPizza() {
        return new NYStylePizza(this.toppings);
        }
    }
    