import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: LocalStorageService,
    private location: Location
  ) {
    
  }

  canActivate() {
    if (!this.authService.isVerified()) {
      this.storage.storeNextUrl(this.location.path());
      this.router.navigate(['/login']);
      return false;
    } else {

    }


    return true;
  }
  
  canActivateChild() {
    if (!this.authService.isVerified()) {
      this.storage.storeNextUrl(this.location.path());
      this.router.navigate(['/login']);
      return false;
    } else {

    }


    return true;
  }
  
}
