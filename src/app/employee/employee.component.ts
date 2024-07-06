import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

employee:Employee = new Employee(10,'sachin',1000)
update()
{
  this.employee.name='raghav'
}

}

 class Employee{
  eid : number;
  name :string;
  salary:number;

  constructor(eid:number,name:string,salary:number)
  {
   this.eid=eid;
   this.name=name;
   this.salary=salary;

  }
}

