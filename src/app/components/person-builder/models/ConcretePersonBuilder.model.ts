import { Person } from "./Person.model";
import { PersonBuilder } from "../interfaces/PersonBuilder.interface";

export class ConcretePersonBuilder implements PersonBuilder {
    private person!: Person;
    public name!: string;

    constructor(name:string) {
        this.reset();
        this.name = name;
    }

    public reset(): void {
        this.person = new Person();
    }

    /**
     * All production steps work with the same product instance.
     */
    public makeEmployee(): void {
        this.person.isEmployee = true;
    }

    public makeManager(hours=40): void {
        this.person.isManager = true;
        this.person.hours = hours;
    }

    public makePartTime(hours=20): void {
        this.person.hours = hours;
    }

    public withMoney(money: number): void {
        this.person.money = money;
    }

    public withList(list=['']): void {
        this.person.shoppingList = list;
    }
  
    public buildPerson(): Person {
            const result = this.person;
            this.person.name = this.name;
            this.reset();
            return result;
        }
    }