import { AbstractProductA } from './../interfaces/abstractProductA.interface';

 // Victorian Chair
export class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2 (Victorian Chair).';
    }
}