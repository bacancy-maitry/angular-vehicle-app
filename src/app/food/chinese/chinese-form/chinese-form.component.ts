import { Component, OnInit, OnChanges, SimpleChanges,Input } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { RenderDebugInfo } from '@angular/core/src/render/api';
import { NgStyle } from '@angular/common';
import { CarModule } from 'src/app/vehicle/car/car.module';
import { Class } from './class';

@Component({
  selector: 'app-chinese-form',
  templateUrl: './chinese-form.component.html',
  styleUrls: ['./chinese-form.component.css']
})
export class ChineseFormComponent implements OnInit {

  style = {
    'background-color': 'lime',
    'font-size': '15px',
    'font-weight': 'bold'
    }

  formTitle: string = "Hello";
  submit: string = "Click Me!";
  customType: string = "checkbox";

  studentFirstName: string;
  studentLastName: string;
  studentAge: number;

  studentData: Array<any> = [];

  ShowButton: string = "Show Table Data";
  show: boolean = false;

  showHide(){
    if(this.show == false){
      this.ShowButton = "Hide Table Data";
      this.show = true;
    }
    else{
      this.ShowButton = "Show Table Data";
      this.show = false;
    }
  }

  changeType(type){
    this.customType = type;
  }

  studentDetails(){
    const data = {
      sfname: this.studentFirstName,
      slname: this.studentLastName,
      sage: this.studentAge,
    };

    this.studentData.push(data);
    // console.log(data);
    // console.log(this.studentData);
    // console.log(this.studentFirstName, this.studentLastName, this.studentAge);
    // console.log(this.studentFirstName);
  }

  constructor() { 
    let a = this.studentFirstName = "Maitry";
    console.log("in Constructor: " + a);
  }

  ngOnInit() {
    // console.log("In ngOnInit");
    let b = this.studentFirstName = "A";
    console.log("in onInit: " + b);
  }

}
