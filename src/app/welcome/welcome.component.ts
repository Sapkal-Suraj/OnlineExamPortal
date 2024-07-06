import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,TitlePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit
 {
  username:any=" ";
  birthday:Date=new Date(2000,10,25)
  ngOnInit(): void {
   this.username.sessionStorage.getItem('username');
   
  }

}
