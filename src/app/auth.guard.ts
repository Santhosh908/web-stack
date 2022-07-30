import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BformComponent } from './components/bform/bform.component';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){
  }
  canActivate(){
    if(this.auth.canlog()){
      return true
    }
    else{
      this.route.navigate(['login'])
      return false
    }
  }  

}
