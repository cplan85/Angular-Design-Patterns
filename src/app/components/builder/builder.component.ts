import { Component, OnInit } from '@angular/core';
import { Director } from './models/Director.model';
import { ConcreteBuilder1 } from './models/ConcreteBuilder1.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  standardProductParts: string = '';
  standardFullFeaturedParts: string = '';

  ngOnInit(): void {

    const director = new Director();
    this.clientCode(director);
  }

    clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    this.standardProductParts = builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    this.standardFullFeaturedParts = builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}



}
