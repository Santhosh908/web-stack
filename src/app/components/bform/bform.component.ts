import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  a:String="Santhosh"
  b:String="abcd"
  submit(name:string,pass:string){
    if(name==this.a && pass==this.b){
      this.router.navigate([HomeComponent])
    }
    else{
      alert("Invalid username or password")
    }
  } 
  constructor(private router : Router) { 
  }
  ngOnInit(): void {
  }
}
