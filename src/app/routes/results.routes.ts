import { Routes } from "@angular/router";
import { resultsGuard } from "app/guards/results.guard";
import { ResultsPageComponent } from "app/pages/results-page/results-page.component";

export const resultsRoutes: Routes = [
  {
    path:"",
    component: ResultsPageComponent,
    canActivate: [resultsGuard]
  }
]
