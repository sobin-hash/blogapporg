import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private api :ApiService){

  }
  BASE_URL:any
  username:any
  userData:any
  email:any
  userId:any
  fullname:any=''
  image:any;
  imagethumbnail:any
  editform:boolean=false
  imagedemo:any='https://th.bing.com/th/id/OIP.IPOEFN_sD-fI2XefKi0F-wHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'


  userDetails = JSON.parse(sessionStorage.getItem('existingUser')|| '{}')

  ngOnInit() {
    this.BASE_URL =this.api.BASE_URL
    this.userId = this.userDetails._id
    this.username = this.userDetails.username
    this.email = this.userDetails.email
    this.getUserProfile()

    
    
    
  }
  allowEdit(){
    this.editform=true
  }


  getUserProfile(){
    this.api.getUserProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.userData = res
      },error:(err:any)=>{
        console.log(err)

      }
    })
  }

  
    onUpload(event: any) {
    

    
      const file:File = event.target.files[0]
      // this.postForm.image= file.name
      console.log(file)
      
      let fr =new FileReader()
      fr.readAsDataURL(file)
      fr.onload=(event:any)=>{
        console.log(event)
        this.imagethumbnail=event.target.result //url from onload
        this.image=file
        console.log(this.image,"imagefilee")
        
      }
    
    }
    onUpdate(){

      const formData = new FormData()

      formData.append("fullname", this.fullname);
      formData.append("userId", this.userId);
      formData.append("username", this.username);
      formData.append("email", this.email);
      formData.append("image", this.image);
      formData.append("imagethumb", this.userData.image);

      this.api.userProfileUpdate(formData).subscribe({
        next:(res:any)=>{
          console.log(res)
          this.userData = res
          this.getUserProfile()

        },error:(err:any)=>{
          console.log(err)
        }
      })
      this.editform = false



    }


  


}
