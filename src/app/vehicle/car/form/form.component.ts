import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  submit: string = "Click Me!";
  carInstance: CarInterface;
  carTypeArray:Array<string> = ["Hatchback","Sedan","Crossover"];

  carObj = {
    carType:null,
    carBrand:null,
    carModel:null,
    carEngineType:null,
    vehicleWheels:null,
    vehicleSeats:null,
  }
  
  carDetails(): void {
    this.carInstance = {
      carType: this.carObj.carType,
      carBrand: this.carObj.carBrand,
      carModel: this.carObj.carModel,
      carEngineType: Number(this.carObj.carEngineType) || 0,
      vehicleWheels: this.carObj.vehicleWheels,
      vehicleSeats: this.carObj.vehicleSeats,
    }
    console.log(this.carInstance);
  }

  constructor() { }

  ngOnInit() {
  }

}