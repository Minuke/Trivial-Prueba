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

  public teams: Team[] = [];

  private gameService:GameService = inject(GameService);
  public questionData: Trivial = {question:"", totalCorrectAnswers:0, answers:[]};

  ngOnInit():void {
    this.teams = this.gameService.getDatos();
    this.questionData = this.gameService.getQuestion0();
  }


  getNextQuestion(evento:boolean):void {
    this.questionData = this.gameService.getQuestion1();
  }
}
