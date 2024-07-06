import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-patent',
  standalone: true,
  imports: [ChildComponent],
  template: `<h1>Welcome to parent component</h1>  <app-child [messege]='x'></app-child>`,
  styleUrl: './patent.component.css'
})
export class PatentComponent {
 
  x:string= " Angular is easy";
}
