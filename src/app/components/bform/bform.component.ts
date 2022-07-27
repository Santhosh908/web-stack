import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
  /* @Input('ngModel')  
  onSubmit(f : NgForm){
    if(f.value.forminput== null){
      console.log(true);
    }
    else{
      console.log(f.value.forminput);
      console.log(false);
    }
  }*/
  constructor() { 
  }

  ngOnInit(): void {
  }

}
