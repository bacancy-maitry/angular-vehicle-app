import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.css']
})
export class BikeTableComponent implements OnInit {

  bikeData:Array<any> = [];

  displayBikeData(paramArray){
    console.log("In Parent");
    this.bikeData = paramArray;
    // console.log(this.bikeData);
  }

  constructor() { }

  ngOnInit() {
  }

}
