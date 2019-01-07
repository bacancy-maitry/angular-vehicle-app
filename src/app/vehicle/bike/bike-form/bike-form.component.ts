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
  
  bikeBrand: string;
  bikeModel: string;
  bikeEngineType: number;
  bikeArray: Array<BikeInterface> = [];

  bikeDetails():BikeInterface{
    let bikeObj:BikeInterface = {
      bikeBrand: this.bikeBrand,
      bikeModel: this.bikeModel,
      bikeEngineType: Number(this.bikeEngineType),
    }
    this.bikeArray.push(bikeObj);
    console.log("In child");
    // console.log(this.bikeArray);
    this.bikeData.emit(this.bikeArray);
    return bikeObj;
  }

  constructor() { }

  ngOnInit() {
  }

}
