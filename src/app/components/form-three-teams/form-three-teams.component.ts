import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'app/services/game.service';
import { Team } from 'app/shared/models/interfaces/team.interface';

@Component({
  selector: 'app-form-three-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-three-teams.component.html',
  styleUrl: './form-three-teams.component.scss'
})
export class FormThreeTeamsComponent {

  public teamsBuild:Team[] = [];

  private fb:FormBuilder = inject(FormBuilder);
  private gameService:GameService = inject(GameService);
  private router:Router = inject(Router);

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0],
    name3: ['', Validators.required],
    score3: [0]

  });

  get name1() {
    return this.teamForm.get('name1');
  }

  get name2() {
    return this.teamForm.get('name2');
  }

  get name3() {
    return this.teamForm.get('name3');
  }

  onSubmit():void {
    if (this.teamForm.invalid) {
      this.teamForm.markAllAsTouched();
      return;
    }else{
      this.teamsBuild = this.buildTeams(this.teamForm.value);
      this.gameService.setDatos(this.teamsBuild);
      this.router.navigate(['/game']);
    }
  }

  private buildTeams(formValues:any):Team[]{
    const teams: Team[] = [];
      for (let i = 1; i <= 3; i++) {
        const name = formValues[`name${i}`];
        const score = formValues[`score${i}`];
        const team: Team = {
          name: name,
          score: score,
        };

        teams.push(team);
      }
      return teams;
  }
}
