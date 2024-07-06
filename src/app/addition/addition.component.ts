import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  no1:number=0;
  no2:number=0;
  answer:number=0;

  addi(){
    this.answer= this.no1+this.no2;
  }

}
