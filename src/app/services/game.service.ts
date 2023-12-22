import { Injectable } from '@angular/core';
import { Team } from 'app/shared/models/interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private teamData:Team[] = [];

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

}
