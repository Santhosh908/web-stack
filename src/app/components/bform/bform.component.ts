import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  @Input('ngModel')  
  hhhhh:any="santhosh";
  onSubmit(f : NgForm){
    console.log(f.value);
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
