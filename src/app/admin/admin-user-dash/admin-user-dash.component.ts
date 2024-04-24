import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-user-dash',
  templateUrl: './admin-user-dash.component.html',
  styleUrls: ['./admin-user-dash.component.css']
})
export class AdminUserDashComponent implements OnInit{

  uid:any;
  arrayBlogs:any=[]

  constructor(private aroute:ActivatedRoute,private api:ApiService,private toastr:ToastrService){
    this.aroute.params.subscribe((res:any)=>{
      console.log(res)
      this.uid=res.id
      console.log(this.uid)

    })

  }


  ngOnInit() {
    this.getUserSpecificBlogs()

    
  }

  getUserSpecificBlogs(){
    this.api.getSpecificUserBlog(this.uid).subscribe({
      next:(res:any)=>{
        console.log(res,"res from getspecific user blog")
        this.arrayBlogs = res
      },error:(err:any)=>{
        console.log(err,"error")
      }
    })
    


  }


  removePost(id:any){
    this.api.deleteBlog(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        
        this.getUserSpecificBlogs()
        this.toastr.success("User Post deleted")
      },error:(err:any)=>{
        console.log(err)
      }

    })


  }



}
