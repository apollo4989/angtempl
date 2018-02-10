import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate() {
    return this.authService.authenticated
      .map((authed) => {
        if (!authed) this.router.navigate(['/auth']);
        return authed;
      });
  }
}
