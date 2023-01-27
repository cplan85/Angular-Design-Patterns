import { Component, OnInit } from '@angular/core';
import { UserFactory } from 'src/app/models/userFactory.model';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  shopperGreeting:string ='';
  employeeGreeting: string ='';
  
  constructor() { }

  ngOnInit(): void {

    let shopperUser = UserFactory.buildUser({firstName: "John", lastName: "Smith"}, 120);

    let employeeUser = UserFactory.buildUser({firstName: "David", lastName: "Anderson"}, 120, 'employee', 'Decathlon');

    employeeUser.payDay(150);
    
    //This would result in an error if we attempted to implement because a shopper doesn't have pay day.
    //shopperUser.payDay(200)

    console.log(shopperUser.hello(),shopperUser.money);

    this.shopperGreeting=`${shopperUser.hello()} I have ${shopperUser.money}`;
    this.employeeGreeting=`${employeeUser.hello()} I have ${employeeUser.money}. I work at ${employeeUser.employer}`;

    console.log(employeeUser.hello(),employeeUser.money)
  }



}
