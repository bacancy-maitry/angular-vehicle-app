import { Component, OnInit, OnChanges ,SimpleChanges } from '@angular/core';
import { BikeInterface } from '../bike-interface';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.css']
})
export class BikeTableComponent implements OnInit {

  bikeArray:Array<any> = [];

  displayBikeData(paramArray:Array<BikeInterface>){
    console.log("In Parent");
    this.bikeArray.push(paramArray);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }

  constructor() { }

  ngOnInit() {
  }

}
