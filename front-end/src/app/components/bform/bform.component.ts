import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  constructor(private router : Router,private http:HttpClient) { 
  }
  ngOnInit(): void {
  }
  url="http://localhost:3000/singin"
  submit(name:string,pass:string){
    if(name=="" && pass==""){
      window.alert("Enter the username and password")
    }
    else{
    this.http.post<any>(this.url,{"name":name,"pass":pass}).subscribe((res)=>{
      console.log(res)
      if(res==null){
           window.alert("Username or Password Incorrect")
      }
      else if(res.name==name && res.password==pass){
        console.log("done")
        this.router.navigate(['home']);
      }
      //  else if(res.name==null){
      //  }
      //  else{
      //    window.alert("Incorrect Password")
      //  }
    })
  }
  } 
  signin(){
    this.router.navigate(['signup'])
  }
}
