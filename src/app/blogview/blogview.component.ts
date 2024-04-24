import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {

  pid:any;

  user :any=JSON.parse(sessionStorage.getItem('existingUser')||'{}');
  
  

  comments:any={
    username:this.user.username,
    comment:'',
    date:'',
    time:''
  }

  specificBlogArray:any=[]
  BASE_URL:any;

  constructor(private aroute:ActivatedRoute,private api:ApiService,private fb:FormBuilder,private toastr:ToastrService){
    this.aroute.params.subscribe((res:any)=>{
      this.pid=res.id
      console.log(this.pid)

    })

  }
  ngOnInit() {
    this.getSpecificBlog()
    console.log(this.user,"user")
    console.log(this.comments.username,"sasasa")
    this.BASE_URL = this.api.BASE_URL
    
    


    
  }

  onchange(){
    console.log(this.comments)
  }




 
  
    







  getSpecificBlog(){
    this.api.getSpecificBlogHome(this.pid).subscribe({    
      next:(res:any)=>{
        console.log(res)
        this.specificBlogArray=res
        console.log(this.specificBlogArray,"arr")


      },error:(err:any)=>{
        console.log(err)
      }
    })

  }


  sendComment(){
    this.comments.date =new Date()
    
    this.api.addComment(this.comments,this.pid).subscribe({

      next:(res:any)=>{
        console.log(res)
        console.log(this.comments)
        this.comments.comment=''
        this.getSpecificBlog()
        this.toastr.success('comment added')


      },error:(err:any)=>{
        console.log(err)
        this.toastr.error(err)

      }

    }  )  
  } 

}
