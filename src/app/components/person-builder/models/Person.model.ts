export class Person {
    public name!: string;
    public isEmployee!: boolean;
    public isManager!: boolean;
    public hours!: number;
    public money!: number;
    public shoppingList!: string[];

    public printShoppingList(): string {
       // console.log(`Product parts: ${this.parts.join(', ')}\n`);
        return `Shopping List: ${this.shoppingList.join(', ')}\n`;
    }

    toString() {
        return JSON.stringify(this);
    }
}