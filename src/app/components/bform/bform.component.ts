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
  public Check:boolean=false
  constructor(private router : Router) { 
  }
  ngOnInit(): void {
  }
  
  submit(name:string,pass:string){
    if(name=="" && pass==""){
        window.alert("Enter the username and password")
    }
    else if(name==this.a && pass==this.b ){
      this.Check=true
      this.router.navigate(['home']);
      // console.log(this.Check);
    }
    else{
      window.alert("Invalid username or password")
    }
  } 
  canlogin():boolean{
    return this.Check
  }
}
