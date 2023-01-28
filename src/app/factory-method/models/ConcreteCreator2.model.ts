import { Product } from "../interfaces/product.interface";
import { Creator } from "./Creater.model";
import { ConcreteProduct2 } from "./ConcreteProduct2.model";

//ChicagoFactory for creating Chicago Style Pizza
export class ConcreteCreator2 extends Creator {

    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}