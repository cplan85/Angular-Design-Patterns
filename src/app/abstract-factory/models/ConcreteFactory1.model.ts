import { AbstractFactory } from "../interfaces/abstractoryFactory.interface";
import { AbstractProductA } from "../interfaces/abstractProductA.interface";
import { AbstractProductB } from "../interfaces/abstractProductB.interface";
import { ConcreteProductA1 } from "./ConcreteProductA1.Model";
import { ConcreteProductB1 } from "./ConcreteProductB1.Model";

//This could be like the ModerFurnitureFactory
// 1 Stands for Modern
export class ConcreteFactory1 implements AbstractFactory {
    //Chair or AKA Modern Chair
    public createProductA(): AbstractProductA {
        // Modern Chair
        return new ConcreteProductA1();
    }
    //Coffee Table or AKA
    public createProductB(): AbstractProductB {
        // Modern Coffee Table
        return new ConcreteProductB1();
    }
}