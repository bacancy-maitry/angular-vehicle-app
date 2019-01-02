import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModule } from './car/car.module';

@NgModule({
  imports: [
    CommonModule,
    CarModule
  ],
  declarations: [],
  exports: [CarModule]
})
export class VehicleModule { }
