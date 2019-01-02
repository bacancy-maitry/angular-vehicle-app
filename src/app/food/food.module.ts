import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChineseModule } from './chinese/chinese.module';

@NgModule({
  imports: [
    CommonModule,
    ChineseModule
  ],
  declarations: [],
  exports: [ChineseModule]
})
export class FoodModule { }
