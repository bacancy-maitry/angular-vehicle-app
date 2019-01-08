import { Component, OnInit, Input } from '@angular/core';
import { CycleInterface } from '../cycle-interface';

@Component({
  selector: 'app-cycle-table',
  templateUrl: './cycle-table.component.html',
  styleUrls: ['./cycle-table.component.css']
})
export class CycleTableComponent implements OnInit {

  @Input("cycleArray") cycleArray: Array<CycleInterface> = [];

  constructor() { }

  ngOnInit() {
  }

}
