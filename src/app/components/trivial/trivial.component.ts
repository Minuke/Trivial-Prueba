import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
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

  public currentTurn = 0;
  public currentTeam!: Team;

  selectAnswer(selectedAnswer:string, correct:boolean):void {
    console.log(selectedAnswer);
    console.log(correct);
    const teamActually:Team = this.nextTurn();
    this.questionData.answers.forEach(answer => {
      if (answer.answer === selectedAnswer) {
        answer.selected = true;
        if(correct) {
          teamActually.score += 1;
        }
      }
    });

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

}
