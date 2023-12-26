import { Routes } from '@angular/router';
import { homeGuard } from "app/guards/home.guard";
import { HomePageComponent } from "app/pages/home-page/home-page.component";

export const homeRoutes: Routes = [
  {
    path:"",
    component: HomePageComponent,
    canActivate: [homeGuard]
  }
]
