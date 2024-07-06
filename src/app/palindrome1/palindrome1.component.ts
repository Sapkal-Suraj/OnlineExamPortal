import { Component } from '@angular/core';
import { PalindromeService } from '../palindrome.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindrome1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './palindrome1.component.html',
  styleUrl: './palindrome1.component.css'
})
export class Palindrome1Component {
  num1:number=0;
  num2:number=0;
  answer:number=0;

  constructor(private op:PalindromeService)
  {
  }
  substract()
  {
    this.answer=this.op.substract(this.num1,this.num2);
  }



}
