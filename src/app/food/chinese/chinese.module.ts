import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChineseFormComponent } from './chinese-form/chinese-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChineseFormComponent],
  exports: [ChineseFormComponent]
})
export class ChineseModule { }
