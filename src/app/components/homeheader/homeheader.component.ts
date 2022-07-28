import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  constructor(private router:Router) {
  }
  menu(){
    this.router.navigate(['menu']);

   }
   logout(){
    this.router.navigate(['login'])
   }
  ngOnInit(): void {
  }

}
