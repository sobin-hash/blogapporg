import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb:FormBuilder){}

  FormData = this.fb.group({
    fullname:'',
    email:'',
    message:''

  })

  onSubmit(){
    console.log(this.FormData)
  }



}

