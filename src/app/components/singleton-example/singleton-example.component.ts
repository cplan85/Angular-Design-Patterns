import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-singleton-example',
  templateUrl: './singleton-example.component.html',
  styleUrls: ['./singleton-example.component.css'],
})
export class SingletonExampleComponent implements OnInit {

   singletonInstance: string = '';
  public constructor(api:ApiService){
    console.log(api.toString());
    this.singletonInstance = api.toString()
    }
    

  ngOnInit(): void {
  }

}
