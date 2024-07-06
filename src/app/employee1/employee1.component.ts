import { Component } from '@angular/core';
import { Employee1, Employee1Service } from '../employee1.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee1.component.html',
  styleUrl: './employee1.component.css'
})
export class Employee1Component {
  
    employee:Employee1 =new Employee1(0,' ',0);
  
    constructor(private service:Employee1Service){}
  
    saveEmployee()
    {
      this.service.saveUser(this.employee).subscribe();
    }

}
