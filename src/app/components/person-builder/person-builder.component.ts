import { ConcretePersonBuilder } from './models/ConcretePersonBuilder.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-builder',
  templateUrl: './person-builder.component.html',
  styleUrls: ['./person-builder.component.css']
})
export class PersonBuilderComponent implements OnInit {

  constructor() { }

  sue = new ConcretePersonBuilder('Sue');

  charles = new ConcretePersonBuilder('Charles');

  employeeResults: object = {};
  shopperResults: object = {};
  charlesShoppingList: string = '';

  makeShopper(personBuilder: ConcretePersonBuilder) {
    personBuilder.withMoney(500);
    personBuilder.makeManager();
    personBuilder.withList(['jeans', 'sunglasses']);
    return personBuilder.buildPerson();
  }

  ngOnInit(): void {
    this.sue.makeEmployee();
    this.sue.makeManager(80);
    const sue = this.sue.buildPerson();
    const charles = this.makeShopper(this.charles);
    this.employeeResults = sue;
    this.shopperResults = charles;
    this.charlesShoppingList = charles.printShoppingList();

    //console.log( JSON.stringify( this.sue.buildPerson() ), "Sue")
    console.log(this.sue.buildPerson().toString())
  }

}
