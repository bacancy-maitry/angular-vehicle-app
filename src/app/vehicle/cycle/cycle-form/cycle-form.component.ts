import { Component, OnInit } from '@angular/core';
import { CycleInterface } from '../cycle-interface';
import { CycleBrand } from '../cycle-brand.enum';

@Component({
  selector: 'app-cycle-form',
  templateUrl: './cycle-form.component.html',
  styleUrls: ['./cycle-form.component.css']
})
export class CycleFormComponent implements OnInit {

  submit:string = "Click Me!";

  cycleBrandArray:Array<any> = [];

  cycleInstace: CycleInterface;

  cycleObj={
    cycleBrand:null,
    cycleModel:null,
    cyclePurchaseYear:null,
    cyclePrice:null,
  }
  
  cycleDetails(): void{
    this.cycleInstace={
      cycleBrand: CycleBrand[this.cycleObj.cycleBrand],
      cycleModel: this.cycleObj.cycleModel,
      cyclePurchaseYear: this.cycleObj.cyclePurchaseYear,
      cyclePrice: Number(this.cycleObj.cycleBrand),
    }
    console.log(this.cycleInstace);
  }

  constructor() { 
    this.cycleBrandArray = [
      {
        "price": 40000,
        "cycleBrand": "Atlas"
      },
      {
        "price": 20000,
        "cycleBrand": "Avon"
      },
      {
        "price": 50000,
        "cycleBrand": "Bianchi"
      },
      {
        "price": 10000,
        "cycleBrand": "BSA"
      },
    ]
  }

  ngOnInit() {
  }

}
