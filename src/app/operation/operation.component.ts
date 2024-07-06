import { Component } from '@angular/core';
import { MathsServiceService } from '../maths-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {
  
  no:number= 0;
  answer:number= 0;
 constructor(private op:MathsServiceService)
  {

  }
  calculateCube()
   {
   this.answer=this.op.calculateCube(this.no);

   }

}
