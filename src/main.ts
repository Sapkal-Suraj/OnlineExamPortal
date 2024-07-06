import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { StudentComponent } from './app/student/student.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { OperationComponent } from './app/operation/operation.component';
import { AdditionComponent } from './app/addition/addition.component';
import { Palindrome1Component } from './app/palindrome1/palindrome1.component';
import { UserComponent } from './app/user/user.component';
import { Employee1Component } from './app/employee1/employee1.component';
import { AdvanceComponent } from './app/advance/advance.component';
import { ProductComponent } from './app/product/product.component';
import { LoginComponent } from './app/login/login.component';
import { CubesquereComponent } from './app/cubesquere/cubesquere.component';
import { QuestionComponent } from './app/question/question.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
