import { AbstractProductA } from './abstractProductA.interface';
// Product B = Coffee Table 
export interface AbstractProductB {
    /**
     * Product B is able to do its own thing...
     */
    usefulFunctionB(): string;

    /**
     * ...but it also can collaborate with the ProductA.
     *
     * The Abstract Factory makes sure that all products it creates are of the
     * same variant and thus, compatible.
     */
    // collaborates with A Products which are Chairs
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}