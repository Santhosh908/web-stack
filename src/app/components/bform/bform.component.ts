import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';


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
      console.log("valid")
    }
    else{
      alert("Invalid username or password")
    }
  } 
  constructor() { 
  }

  ngOnInit(): void {
  }

}
