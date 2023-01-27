import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static increment:number = 0;


  constructor() { 
    ApiService.increment++;
  }

  public toString() :string {
    return "Current instance: " + ApiService.increment;
    }
    
}
