import { Injectable } from '@angular/core';
import { User } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor( private httpclint:HttpClient) { }
  validateUser(user: User):Observable<boolean>
  {
   return this.httpclint.post<boolean>("http://localhost:8080/validate",user);
  }

}
