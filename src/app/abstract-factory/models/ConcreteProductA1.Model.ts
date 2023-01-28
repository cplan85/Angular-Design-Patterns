import { AbstractProductA } from './../interfaces/abstractProductA.interface';
//Modern Chair
export class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1 (Modern Chair).';
    }
}