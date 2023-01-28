import { AbstractFactory } from "../interfaces/abstractoryFactory.interface";
import { AbstractProductA } from "../interfaces/abstractProductA.interface";
import { ConcreteProductA2 } from "./ConcreteProductA2.Model";
import { AbstractProductB } from "../interfaces/abstractProductB.interface";
import { ConcreteProductB2 } from "./ConcreteProductB2.Model";

//This could be like the Victorian FurnitureFactory
// 2 = Victorian
export class ConcreteFactory2 implements AbstractFactory {
    //Chair
    public createProductA(): AbstractProductA {
        // Victorian Chair
        return new ConcreteProductA2();
    }
     //Coffee Table
    public createProductB(): AbstractProductB {
       // Victorian Coffee Table
        return new ConcreteProductB2();
    }
}