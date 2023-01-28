import { Component, OnInit } from '@angular/core';
import { Creator } from './models/Creater.model';
import { ConcreteCreator1 } from './models/ConcreteCreater1.model';
import { ConcreteCreator2 } from './models/ConcreteCreator2.model';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

NYFactoryResults: string = '';
ChicagoFactoryResults: string = '';

  constructor() { }

  ngOnInit(): void {

    /**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreator1.');
this.NYFactoryResults = this.runCreator(new ConcreteCreator1());

console.log('App: Launched with the ConcreteCreator2.');
this.ChicagoFactoryResults = this.runCreator(new ConcreteCreator2());

  }

  runCreator(creator: Creator) {
    //console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    return creator.someOperation();
  }

  
}
