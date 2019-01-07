import { Component, OnInit, Input } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // @Input('carType') carType: string;
  // @Input('carModel') carModel: string;
  // @Input('carBrand') carBrand: string;
  @Input('carArray') carArray :Array<CarInterface> ;

  constructor() { }

  ngOnInit() {
  }

}
