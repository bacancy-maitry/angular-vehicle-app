import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { BikeTableComponent } from './bike-table/bike-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BikeFormComponent, BikeTableComponent],
  exports: [BikeFormComponent,BikeTableComponent]
})
export class BikeModule { }
