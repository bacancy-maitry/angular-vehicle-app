import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  // @Input('carType') carType: string;
  // @Input('carModel') carModel: string;
  // @Input('carBrand') carBrand: string;
  
  carArray: Array<CarInterface> = [];
  @Input('carInstance') carInstance :CarInterface ;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes && changes.carInstance && changes.carInstance.firstChange == false){
      console.log("HELLO");
      this.carArray.push(this.carInstance);
      console.log(this.carArray);
    }
    else{
      console.log("abc");
    }
  }

  

}
