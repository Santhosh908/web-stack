import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BformComponent } from './components/bform/bform.component';

@Injectable({
  providedIn: 'root',useClass: BformComponent
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }
  
}
