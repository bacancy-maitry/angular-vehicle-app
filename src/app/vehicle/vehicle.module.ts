import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModule } from './car/car.module';
import { BikeModule } from './bike/bike.module';

@NgModule({
  imports: [
    CommonModule,
    CarModule,
    BikeModule
  ],
  declarations: [],
  exports: [CarModule,BikeModule]
})
export class VehicleModule { }
