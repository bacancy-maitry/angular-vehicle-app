import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  carArray: Array<CarInterface> = [];
  @Input('carInstance') carInstance :CarInterface ;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes && changes.carInstance && changes.carInstance.firstChange == false){
      this.carArray.push(this.carInstance);
      console.log(this.carArray);
    }
    else{
      console.log(changes);
      console.log("Car Else Block");
    }
  }

  

}
