import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { User } from '../user.service';
import { CommonModule } from '@angular/common';
import { Question, QuestionService } from '../question.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{ 

  message:any= "";
  user:User=new User('','',0,'');
  subject:any="";
  constructor(private loginService:LoginService,private router:Router) { }
validate()
 {
   this.loginService.validateUser(this.user).subscribe(answer=>{
     
     if(answer)
     {
       sessionStorage.setItem("subject",this.subject);

       sessionStorage.setItem("username",this.user.username);
       this.router.navigate(['question']);
     }
     else
     {
       this.router.navigate(['login']);
       this.message="wrong credentials";
     }

   });
  
}

}

