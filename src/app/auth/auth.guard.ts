import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, CanMatchFn, Router } from "@angular/router";

import { AuthService } from "./auth.service";

export const authGuard: CanMatchFn | CanActivateChildFn | CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.user) {
    return true;
  }

  return router.createUrlTree(["/login"]);
};
