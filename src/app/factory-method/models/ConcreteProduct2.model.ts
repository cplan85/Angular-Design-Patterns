import { Product } from "../interfaces/product.interface";
export class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2(ChicagoStylePizza)}';
    }
}