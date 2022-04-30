import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServiceService } from './authgurad-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardnameGuard implements CanActivate {
  
  constructor(private Authguardservice: AuthguradServiceService, private router:Router){}

  canActivate(): boolean{
    if(!this.Authguardservice.gettoken()){
      this.router.navigateByUrl("/login");
    }  
    return this.Authguardservice.gettoken();
  }
}

// route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {