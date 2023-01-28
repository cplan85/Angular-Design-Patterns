import { AbstractProductB } from './../interfaces/abstractProductB.interface';
import { AbstractProductA } from './../interfaces/abstractProductA.interface';

 //B2 = Victorian Coffee Table
export class ConcreteProductB2 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2 (Victorian Coffee Table).';
    }

    /**
     * The variant, Product B2, is only able to work correctly with the variant,
     * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 (Victorian Coffee Table) collaborating with the (${result})`;
    }
}