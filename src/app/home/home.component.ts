import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  blogsArray:any=[]
  searchKey:any;
  more:any=false;
  blogArrayToDis:any=[]
  BASE_URL:any

  constructor(private api:ApiService){

  }


  ngOnInit() {
    this.getAllBlogs()
    this.BASE_URL = this.api.BASE_URL

    
    
  }

  onSearchText(e:any){
    this.searchKey = e


  }

  onMore(){
    this.more=true

  }
  getAllBlogs(){

    this.api.getAllBlog().subscribe({
      next:(res:any)=>{
        console.log(res,"allblogs")
        this.blogsArray = res
        this.blogArrayToDis = this.blogsArray.slice(-6)

        console.log(this.blogsArray,"array")

      },error:(err:any)=>{
        console.log(err)
      }
    })

  }

}
