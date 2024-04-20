import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit{

  blogsArray:any=[]
  BASE_URL:any;

  constructor(private api:ApiService,private toastr:ToastrService){

  }

  ngOnInit() {
    this.getUserBlogs()
    this.BASE_URL=this.api.BASE_URL

    
  }

  getUserBlogs(){
    this.api.getUserBlogs().subscribe({
      next:(res:any)=>{
        console.log(res,"userblogs")
        this.blogsArray = res
      },error:(err:any)=>{
        console.log(err)
      }

    })
  }

  onRemove(id:any){
    this.api.deleteBlog(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("blog deleted successfully")
        this.getUserBlogs()
      },error:(err:any)=>{
        console.log(err)
        this.toastr.warning("Delete operation failed")


      }
    })

  }

}
