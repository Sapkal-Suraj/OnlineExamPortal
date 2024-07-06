import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit
{
  answer:Answer=new Answer(0,'','','');
  subject:any='';
  question : Question = new Question(0,'','','','','','','');
  username:any='';
  submittedAnswer:string='';
  reminingtime=121;
  durationMessage='';

  allanswers:Answer[]=[];
  selected=false;

  constructor(private questionService:QuestionService,private router:Router)
  {
    this.subject=sessionStorage.getItem("subject");
    this.username=sessionStorage.getItem("username");
  }
  ngOnInit()
  {
    setInterval(()=>{
      this.reminingtime=this.reminingtime-1;
      if(this.reminingtime==0)
      {
        this.endexam();
      }
      let minute = Math.floor(this.reminingtime/60);
      let second = Math.floor(this.reminingtime%60);
      this.durationMessage="time remaining :-"+minute+":"+second+":";

    },1000);
    this.questionService.getFirstQuestion(this.subject).subscribe(questionFromResponse=>this.question=questionFromResponse);
  }
  nextQuestion()
  {
    this.selected=false;
    this.questionService.getAllAnswer().subscribe(response=>this.allanswers=response);
    this.questionService.nextQuestion().subscribe(response=>this.question=response);
  }

  previousQuestion()
  {
    this.selected=false;
    this.questionService.getAllAnswer().subscribe(response=>this.allanswers=response);
    this.questionService.previousQuestion().subscribe(response=>this.question=response);
  }
  saveAnswer()
  {
    this.answer.originalAnswer=this.question.answer;
    this.answer.qno=this.question.qno;
    this.answer.qtext=this.question.qtext;
    this.answer.submittedAnswer=this.submittedAnswer;

    this.questionService.saveAnswer(this.answer).subscribe();

    console.log("answer submitted");
  }
    endexam()
  {
    this.router.navigate(['score']);
  }
  compare(currentOption:string)
  {
    for(var i=0;i<this.allanswers.length;i++)
    {
     var answer=this.allanswers[i];
    
        if( this.question.qno==answer.qno && answer.submittedAnswer==currentOption)
           {
              return "green";

            }
    
    }
  return "red";
}
compare2(currentOption:string)
{
  for(var i=0;i<this.allanswers.length;i++)
  {
    var answer=this.allanswers[i];
     
    if(this.question.qno==answer.qno&&answer.submittedAnswer==currentOption)
    {
      return true;
    }
  }
  return false;
}

}
