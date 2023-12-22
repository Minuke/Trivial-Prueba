import { Component, Input } from '@angular/core';
import { Team } from 'app/shared/models/interfaces/team.interface';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss'
})
export class ScoreBoardComponent {

  @Input() teamName: string = "";
  @Input() teamScore: number = 0;

}
