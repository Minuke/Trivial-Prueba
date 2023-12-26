
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from 'app/services/game.service';

export const homeGuard: CanActivateFn = (route, state) => {
  const dataService = new GameService();
  const router = new Router();
  if (dataService.getDatos().length == 0) {
    return true;
  } else {
    router.navigate(['/game']);
    return false;
  }
};
