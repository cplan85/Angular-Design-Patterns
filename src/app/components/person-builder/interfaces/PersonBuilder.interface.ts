export interface PersonBuilder {
    makeEmployee(): void;
    makeManager(hours:number): void;
    makePartTime(hours:number): void;
    withMoney(money:number): void;
    withList(list: Array<string>): void;
}
