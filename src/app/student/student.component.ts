import { Component, OnInit } from '@angular/core';
import { StudentInterface } from '../student-interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentArray: StudentInterface[];

  constructor(private studentService: StudentService) { }

  // getStudentDetails(){
  //   this.studentArray = this.studentService.getStudentData();
  //   console.log("In Student Component");
  // }

  //Use of Observable
  getStudentDetails(): void{
    this.studentService.getStudentData().subscribe(student => this.studentArray = student);
  }

  ngOnInit() {
    // this.getStudentDetails();
    // console.log(this.getStudentDetails);
  }

}
