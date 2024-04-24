import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private api:ApiService,private route:Router,private toastr:ToastrService){

  }


  userLoginForm = this.fb.group({

    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(8)]]
  })
  

  onSubmit(){
    console.log(this.userLoginForm.value)
    this.api.userLogin(this.userLoginForm.value).subscribe({
      next:(res:any)=>{
        console.log('Login Succcess!!')
        sessionStorage.setItem('token',(res.token))
        sessionStorage.setItem('role',(res.role))



        if(res.existingUser){
          sessionStorage.setItem('existingUser',JSON.stringify(res.existingUser))
          console.log(res.token)
          console.log(res.existingUser,"existing user login")
          this.route.navigateByUrl('/home')
  
          
        }else{
          if(res.existingAdmin){
            sessionStorage.setItem('existingAdmin',JSON.stringify(res.existingAdmin))
            console.log(res.token)
            console.log(res.existingUser,"existing user login")
            this.route.navigateByUrl('/admin')

          }

          
        }
        
      },error:(err:any)=>{
        console.log(err,"login failed")
        this.toastr.error(err.error)

      }
    })

 

  }
}
