import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-design-patterns';

  singletonInstance: string = '';

  public constructor(api:ApiService){
    console.log(api.toString());
    this.singletonInstance = api.toString();
    }


    
}
