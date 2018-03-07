import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserloginService } from './userlogin.service';

@Injectable()
export class UserauthGuard implements CanActivate {

  constructor(private userloginService:UserloginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userloginService.getUserLoggedIn();
  }
}
