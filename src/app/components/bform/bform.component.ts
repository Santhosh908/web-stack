import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  a:String="Santhosh"
  b:String="abcd"
  check:Boolean=false
  constructor(private router : Router) { 
  }
  ngOnInit(): void {
  }
   setlogin(){
    this.check=true
  }
  submit(name:string,pass:string){
    if(name==this.a && pass==this.b && this.check==true){
      console.log("home")
      console.log(this.check)
      this.router.navigate(['home']);
    }
    else{
      alert("Invalid username or password")
    }
  } 
}
