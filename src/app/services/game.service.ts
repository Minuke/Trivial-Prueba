import { Injectable } from '@angular/core';
import { questions } from 'app/shared/models/constants/questions';
import { Team } from 'app/shared/models/interfaces/team.interface';
import { Trivial } from 'app/shared/models/interfaces/trivial.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private teamData:Team[] = [];
  public totalQuestionShowedInGame:number = 0;

  setDatos(newDataTeam: Team[]): void {
    this.teamData = newDataTeam;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('teamData', JSON.stringify(newDataTeam));
    }
  }

  getDatos(): Team[] {
    if (!this.teamData.length) {
      if (typeof localStorage !== 'undefined') {
        this.teamData = JSON.parse(localStorage.getItem('teamData') || '[]');
      }
    }
    return this.teamData;
  }

  deleteDatos() {
    if (this.teamData.length) {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('teamData');
      }
    }
  }

  getQuestion0():Trivial {
    this.totalQuestionShowedInGame += 1;
    return questions[0];
  }

  getQuestion1():Trivial {
    this.totalQuestionShowedInGame += 1;
    return questions[1];
  }

  getTotalQuestionsShowedInGame(): number {
    return this.totalQuestionShowedInGame;
  }

}
