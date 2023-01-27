import { Pizza } from './pizza.model';
import { ChicagoFactory } from './ChicagoFactory.model';
import { NYFactory } from './nyFactory.model';

export class PizzaFactory{
   
    static createPizza(toppings:string, pizzaType?: string): any {
        return new Pizza(toppings);
    }
    }
    