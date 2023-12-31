import { Component, inject } from '@angular/core';
import { ScoreBoardComponent } from '../../components/score-board/score-board.component';
import { Team } from 'app/shared/models/interfaces/team.interface';
import { GameService } from 'app/services/game.service';
import { GameWinnerComponent } from 'app/components/game-winner/game-winner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [ScoreBoardComponent, GameWinnerComponent],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.scss'
})
export class ResultsPageComponent {

  public teams: Team[] = [];
  private gameService:GameService = inject(GameService);
  private router:Router = inject(Router);

  ngOnInit():void {
    this.teams = this.gameService.getDatos();
  }

  startingAgain(){
    this.gameService.deleteDatos();
    this.router.navigate(['/home']);
  }

}
