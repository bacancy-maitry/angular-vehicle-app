import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,CarInterface {
  
  submit: string = "Click Me!";

  carType: string;
  carBrand: string;
  carModel: string;
  carEngineType: number;
  carArray: Array<CarInterface> = []; 

  carDetails(): CarInterface {
    let carObj: CarInterface = {
      carType: this.carType,
      carBrand: this.carBrand,
      carModel: this.carModel,
      carEngineType: Number(this.carEngineType) || 0
    }
    this.carArray.push(carObj);
    console.log(this.carArray);
    return carObj;
  }

  constructor() { }

  ngOnInit() {
  }

}
