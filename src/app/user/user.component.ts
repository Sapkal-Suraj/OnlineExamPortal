import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit
 {
  user:User =new User('','',0,'');
  users:User[]=[];
  messege:string="";

  constructor(private service:UserService){}
  ngOnInit():void
  {
    this.getAllUsers();
  }
  saveUser()
  {
    this.service.saveUser(this.user).subscribe();
  }

  getAllUsers()
  {
    this.service.getAllUsers().subscribe(userarray=>this.users=userarray);
  }
  getUser()
  {
    this.service.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
  }
  deleteUser()
  {
    this.service.deleteUser(this.user.username).subscribe(messege=>this.messege="object deleted");
  }


}
