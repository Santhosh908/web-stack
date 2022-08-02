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
  a:String="Santhosh"
  b:String="abcd"
   Check:boolean
  constructor(private router : Router,private http:HttpClient) { 
    this.Check=false
  }
  ngOnInit(): void {
  }
    url="http://localhost:3000/enroll"

  submit(name:string,pass:string){
    var formData: any = new FormData();
    formData.append("name",name)
    formData.append("pass",pass)
    this.http.post<any>(this.url,{"name":name,"pass":pass})
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
