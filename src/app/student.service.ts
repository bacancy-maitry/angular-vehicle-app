import { Injectable } from '@angular/core';
import { StudentData } from './student-data';
import { StudentInterface } from './student-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  // getStudentData(): StudentInterface[]{
  //   return StudentData;
  // }

  //Use of Observable
  getStudentData(): Observable<StudentInterface[]> {
    return of(StudentData);
  }

}
