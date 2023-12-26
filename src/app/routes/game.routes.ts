import { Routes } from "@angular/router";
import { gameGuard } from "app/guards/game.guard";
import { GamePageComponent } from "app/pages/game-page/game-page.component";

export const gameRoutes: Routes = [
  {
    path:"",
    component: GamePageComponent,
    canActivate: [gameGuard]
  }
]
