import { AbstractFactory } from './interfaces/abstractoryFactory.interface';
import { Component, OnInit } from '@angular/core';
import { ConcreteFactory1 } from './models/ConcreteFactory1.model';
import { ConcreteFactory2 } from './models/ConcreteFactory2.model';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

  constructor() { }

  factory1Results: string = '';
  factory2Results: string = '';

  createProducts(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

   // console.log(productB.usefulFunctionB());

  //  console.log(factory, "factory")

    if(factory.constructor.name == "ConcreteFactory1") {
      this.factory1Results = productB.usefulFunctionB();
    }
    else if (factory.constructor.name == "ConcreteFactory2") {
      this.factory2Results = productB.usefulFunctionB();
    }
  
   // console.log(productB.anotherUsefulFunctionB(productA));
  }

  ngOnInit(): void {

    console.log('Client: Testing client code with the first factory type...');
    this.createProducts(new ConcreteFactory1());
    
    console.log('Client: Testing the same client code with the second factory type...');
    this.createProducts(new ConcreteFactory2());
  }

}
