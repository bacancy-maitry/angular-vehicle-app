import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModule } from './car/car.module';
import { BikeModule } from './bike/bike.module';
import { CycleModule } from './cycle/cycle.module';


@NgModule({
  imports: [
    CommonModule,
    CarModule,
    BikeModule,
    CycleModule
  ],
  declarations: [],
  exports: [CarModule,BikeModule,CycleModule]
})
export class VehicleModule { }
