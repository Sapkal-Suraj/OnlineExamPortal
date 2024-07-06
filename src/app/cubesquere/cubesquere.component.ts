import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cubesquere',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cubesquere.component.html',
  styleUrl: './cubesquere.component.css'
})
export class CubesquereComponent {

  no1:number=0;
  
  answer:number=0;
  answer1:number=0;

  cubeme()
  {
    this.answer=this.no1*this.no1*this.no1;
  }
  squareme()
  {
    this.answer1=this.no1*this.no1;
  }
}
