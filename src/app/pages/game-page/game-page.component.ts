import { Component, inject } from '@angular/core';
import { GameService } from 'app/services/game.service';
import { Team } from 'app/shared/models/interfaces/team.interface';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

  public teams: Team[] = [];

  private gameService:GameService = inject(GameService);

  ngOnInit() {
    this.teams = this.gameService.getDatos();
    console.log(this.teams);
  }

}
