import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  a:String="Santhosh"
  b:String="abcd"
   Check:boolean
  constructor(private router : Router) { 
    this.Check=false
  }
  ngOnInit(): void {
  }
  
  submit(name:string,pass:string){
    // localStorage.setItem('pass',pass)
    this.router.navigate(['home']);
    
    if(name=="" && pass==""){
      this.Check=false
      window.alert("Enter the username and password")
    }
    else if(name==this.a && pass==this.b ){
      var Check=true
      console.log(this.Check)
       localStorage.setItem('loggedin','yes')
      // console.log(this.Check);
    }
    else{
      this.Check=false
      window.alert("Invalid username or password")
    }
    console.log(this.Check+"check")
  } 
  canlogin():boolean{
    return this.Check
  }
}
