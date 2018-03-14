import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserloginService } from '../_service/userlogin.service';
@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private userloginService:UserloginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userloginService.getAdminUserLoggedIn();
  }
}
