import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  constructor(private httpclient:HttpClient) { }

  saveUser(employee:Employee1)
  {
    return this.httpclient.post<void>("http://localhost:8080/saveEmployee",employee)
  }}
  export class Employee1 {
 
    eid:number;
    name:string;
    salary:number;

  
  
    public constructor(eid:number, name:string,salary:number )
    {
     this.eid=eid;
     this.name=name;
     this.salary=salary;
    
    }
  }
