import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CycleInterface } from '../cycle-interface';

@Component({
  selector: 'app-cycle-table',
  templateUrl: './cycle-table.component.html',
  styleUrls: ['./cycle-table.component.css']
})
export class CycleTableComponent implements OnInit, OnChanges {

  cycleArray: Array<CycleInterface> = [];
  @Input("cycleInstace") cycleInstace: CycleInterface;

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes && changes.cycleInstace && changes.cycleInstace.firstChange == false){
      this.cycleArray.push(this.cycleInstace);
    }
    else{
      console.log("Cycle Else Block");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
