import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeInterface } from '../bike-interface';


@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  @Output() bikeData = new EventEmitter();

  submit:string = "Click Me!";  
  bikeBrandArray: Array<string> = ["Yamaha","Ducati","Honda","Suzuki"];
  bikeInstance:BikeInterface;

  bikeObj = {
    bikeBrand:null,
    bikeModel:null,
    bikeEngineType:null,
    vehicleWheels:null,
    vehicleSeats:null,    
  }

  bikeDetails(): void{
    this.bikeInstance = {
      bikeBrand:this.bikeObj.bikeBrand,
      bikeModel:this.bikeObj.bikeModel,
      bikeEngineType:this.bikeObj.bikeEngineType,
      vehicleWheels:this.bikeObj.vehicleWheels,
      vehicleSeats:this.bikeObj.vehicleSeats,
    }
    console.log(this.bikeInstance);
    this.bikeData.emit(this.bikeInstance);
  }

  constructor() { }

  ngOnInit() {
  }

}
