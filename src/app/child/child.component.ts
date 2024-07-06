import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<span> value of messege is{{messege}}<span>`,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  messege:string="";

}
