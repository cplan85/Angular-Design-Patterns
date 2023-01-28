import { AbstractProductB } from './../interfaces/abstractProductB.interface';
import { AbstractProductA } from './../interfaces/abstractProductA.interface';

// Modern Coffee Table
export class ConcreteProductB1 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1 (Modern Coffee Table).';
    }

    /**
     * The variant, Product B1 - Modern coffee table, is only able to work correctly with the variant,
     * Product A1 - Modern Chair. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 (Modern Coffee Table) collaborating with the (${result})`;
    }
}