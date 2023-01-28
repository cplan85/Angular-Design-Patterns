import { Product } from "../interfaces/product.interface";
export class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1(NY Style Pizza)}';
    }
}