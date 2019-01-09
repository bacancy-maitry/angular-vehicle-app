import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeInterface } from '../bike-interface';


@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  submit:string = "Click Me!";

  @Output() bikeData = new EventEmitter();
  
  bikeBrandArray: Array<string> = ["Yamaha","Ducati","Honda","Suzuki"];
  bikeInstance:BikeInterface;

  bikeObj = {
    bikeBrand:null,
    bikeModel:null,
    bikeEngineType:null,    
  }

  bikeDetails(): void{
    this.bikeInstance = {
      bikeBrand:this.bikeObj.bikeBrand,
      bikeModel:this.bikeObj.bikeModel,
      bikeEngineType:this.bikeObj.bikeEngineType,
    }
    console.log(this.bikeInstance);
    this.bikeData.emit(this.bikeInstance);
  }

  constructor() { }

  ngOnInit() {
  }

}
