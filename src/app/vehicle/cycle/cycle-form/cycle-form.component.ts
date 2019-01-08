import { Component, OnInit } from '@angular/core';
import { CycleInterface } from '../cycle-interface';
import { CycleBrand } from '../cycle-brand.enum';

@Component({
  selector: 'app-cycle-form',
  templateUrl: './cycle-form.component.html',
  styleUrls: ['./cycle-form.component.css']
})
export class CycleFormComponent implements OnInit,CycleInterface {

  submit:string = "Click Me!";

  cycleBrand: string;
  cycleModel: string;
  cyclePurchaseYear: number;
  cyclePrice: number;
  cycleArray: Array<CycleInterface> = [];

  cycleDetails():CycleInterface{
    let cycleObj:CycleInterface = {
      cycleBrand: CycleBrand[this.cycleBrand],
      cycleModel: this.cycleModel,
      cyclePurchaseYear: Number(this.cyclePurchaseYear),
      cyclePrice: Number(this.cycleBrand),
    }
    this.cycleArray.push(cycleObj);
    // console.log(cycleObj);
    // console.log(this.cycleArray);
    return cycleObj;
  }

  constructor() { }

  ngOnInit() {
  }

}
