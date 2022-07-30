import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }
  canlog():boolean{
    return (!!localStorage.getItem('loggedin'))
}
}
