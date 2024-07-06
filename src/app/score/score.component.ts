import { Component, OnInit } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit
{
  score:any="";
  allanswers:Answer[]=[];
  constructor(private questionservice:QuestionService)
  {
    this.questionservice.getAllAnswer().subscribe(allanswer=>this.allanswers=allanswer);
  }
 ngOnInit(): void {
   this.questionservice.endexam().subscribe(score=>this.score=score);
 }
 getColor(submittedAnswer:string,originalAnswer:string)
 {
    if(submittedAnswer==originalAnswer)
    return "green";
    else
    return "red";
 }
}
