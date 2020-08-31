import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     // console.log(' mmmm ', localStorage.getItem('isAuthorizedUser'), 'cccc ', JSON.parse(localStorage.getItem('isAuthorizedUser')));
    return localStorage.getItem('isAuthorizedUser') && JSON.parse(localStorage.getItem('isAuthorizedUser'));
  }

}
