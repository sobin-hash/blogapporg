import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder,private api:ApiService,private toastr:ToastrService,private router:Router) {

  }

  userRegForm = this.fb.group({


    username: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@!]*'), Validators.minLength(8)]]

  })

 

  onSubmit() {
    
      console.log(this.userRegForm.value);
      this.api.userRegister(this.userRegForm.value).subscribe({
        next:(res:any)=>{
          console.log(res)
          this.toastr.success(`${this.userRegForm.value.username} successfully registered as user!!`)
          this.router.navigateByUrl('/login')
          
    
        },error:(err)=>{
          console.log(err)
          this.toastr.error("Registration failed..!!")
    
        }
      })
      
     }
  

}
