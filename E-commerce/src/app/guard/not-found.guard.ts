import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {

  constructor(private authService:AuthenticationService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isUserLoggedIn()){
        this.router.navigateByUrl("home/user");
      }else if(this.authService.isAdminLoggedIn()){
        this.router.navigateByUrl("adminDashboard");
      }else{
        this.router.navigateByUrl("");
      }
    return true;
  }
  
}
