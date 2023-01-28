import { AbstractProductA } from "./abstractProductA.interface";
import { AbstractProductB } from "./abstractProductB.interface";

export interface AbstractFactory {
    //ProductA could be Chair
    createProductA(): AbstractProductA;
    //ProductB could be CoffeeTable 
    createProductB(): AbstractProductB;
}