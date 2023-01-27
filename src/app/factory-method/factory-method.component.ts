import { Component, OnInit } from '@angular/core';
import { PizzaFactory } from '../models/pizzaFactory.model';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let chicagoPizza = PizzaFactory.createPizza("cheese");
  //  let NYPizza = PizzaFactory.createPizza("cheese", "NY");

  //  console.log(chicagoPizza.crustType);

  //  console.log(NYPizza.crustType);
  }

}
