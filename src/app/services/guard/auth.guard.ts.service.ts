import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  jwthelper=new JwtHelperService()
  constructor(private Route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(!!localStorage.getItem('token')){
        if(!this.jwthelper.isTokenExpired(localStorage.getItem('token') as string)&&this.jwthelper.decodeToken(localStorage.getItem('token') as string)){
         return  true
        }
      }
        this.Route.navigate([{outlets:{primary:'home',nav:'nav'}}])
        return false


  }
}
