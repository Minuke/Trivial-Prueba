import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from 'app/shared/models/interfaces/team.interface';
import { Trivial } from 'app/shared/models/interfaces/trivial.interface';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent {

  @Input() questionData!:Trivial;
  @Input() teams!:Team[];
  @Output() nextQuestionEmitter:EventEmitter<boolean> = new EventEmitter<boolean>;

  public currentTurn = 0;
  public currentTeam!: Team;
  public totalCorrectAnswerSelected:number = 0;
  public nextQuestion:boolean = false;

  selectAnswer(selectedAnswer:string, correct:boolean):void {
    //console.log(selectedAnswer);
    //console.log(correct);
    if(this.nextQuestion == false){
      const teamActually:Team = this.nextTurn();
      this.questionData.answers.forEach(answer => {
        if (answer.answer === selectedAnswer) {
          answer.selected = true;
          if(correct) {
            teamActually.score += 1;
            this.totalCorrectAnswerSelected += 1;
            this.nextQuestion = this.questionIsFinished(this.questionData.totalCorrectAnswers);
          }
        }
      });
    }


  }

  nextTurn():Team {
    if (this.currentTurn >= this.teams.length) {
      this.currentTurn = 0;
    }
    this.currentTeam = this.teams[this.currentTurn];
    console.log(this.currentTeam);
    this.currentTurn++;
    return this.currentTeam;
  }

  questionIsFinished(totalCorrectAnswerSelected:number):boolean {
    if(totalCorrectAnswerSelected == this.totalCorrectAnswerSelected) {
      return true;
    }else {
      return false;
    }
  }

  otherQuestion():void {
    this.nextQuestionEmitter.emit(this.nextQuestion);
    this.nextQuestion = false;
    this.totalCorrectAnswerSelected = 0;
  }

}
