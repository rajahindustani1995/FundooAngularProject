import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from '../Services/authguardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  constructor(private Authguardservice: AuthguardService, private router: Router) { }

  canActivate(): boolean {
    this.token = this.Authguardservice.gettoken();
    if (!this.token) {
      console.log("Warning => User token Expired!! Please login first");
      this.router.navigateByUrl("/login");
    }
    return this.Authguardservice.gettoken();
  }

}
