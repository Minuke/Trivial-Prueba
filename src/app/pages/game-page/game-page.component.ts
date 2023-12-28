import { Component, inject } from '@angular/core';
import { ScoreBoardComponent } from 'app/components/score-board/score-board.component';
import { TrivialComponent } from 'app/components/trivial/trivial.component';
import { GameService } from 'app/services/game.service';
import { Team } from 'app/shared/models/interfaces/team.interface';
import { Trivial } from 'app/shared/models/interfaces/trivial.interface';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [ScoreBoardComponent, TrivialComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

  private gameService:GameService = inject(GameService);

  public teams: Team[] = [];
  public questionData: Trivial = {question:"", totalCorrectAnswers:0, answers:[]};
  public endGame:boolean = false;
  public totalQuestionInGame:number = 2;
  public totalQuestionShowedInGame:number = 0;

  ngOnInit():void {
    this.teams = this.gameService.getDatos();
    this.searchAndShowQuestion()
    this.totalQuestionShowedInGame = 0;
  }

  searchAndShowQuestion(){
    this.questionData = this.gameService.getRandomQuestion();
  }


  getNextQuestion(evento:boolean):void {
    this.totalQuestionShowedInGame += 1;
    if(this.endGame == false) {
      this.searchAndShowQuestion();
      if(this.totalQuestionInGame == this.totalQuestionShowedInGame+1) {
        this.endGame = true;
        this.totalQuestionShowedInGame = 0;
      }
    }
  }
}
