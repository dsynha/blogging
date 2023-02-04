import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() comment: any;

  @Input() answer: string = "";
  @Output() answerChange = new EventEmitter<string>();

  constructor(){}

  showAnswerField: boolean = false;
  @Input() answers: Array<String> = [];

  sendAnswer(){
    if(this.answer != ""){
      this.answers.push(this.answer);
      console.log(this.answers)
      this.answer = ""
    }
     this.showAnswerField = !this.showAnswerField;
  }

  keyup(data: string){
    this.answer = data;
  }

  ngOnInit(): void{

  }
  
}
