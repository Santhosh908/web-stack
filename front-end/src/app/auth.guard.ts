import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BformComponent } from './components/bform/bform.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
class UserToken {}
class Permissions {
  canActivate(user: UserToken): boolean {
    return true;
  }
}
export class AuthGuard implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken,private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(this.permissions.canActivate(this.currentUser)){
      return true
    }
    else{
      this.router.navigate(['login'])
      return false
    }
  }
}
// export class AuthGuard implements CanActivate {
//   constructor(private auth:AuthService,private route:Router){
//   }
//   canActivate(){
//     return true
//   }  

// }
