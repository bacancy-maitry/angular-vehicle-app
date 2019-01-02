import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChineseFormComponent } from './chinese-form/chinese-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChineseFormComponent],
  exports: [ChineseFormComponent]
})
export class ChineseModule { }
