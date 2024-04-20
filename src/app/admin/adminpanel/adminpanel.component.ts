import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit{

  userArray:any;
  constructor(private api:ApiService){

  }
  ngOnInit() {

    this.getAllProducts()
    
  }

  getAllProducts(){
    this.api.getAllUser().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.userArray=res
      },error:(err:any)=>{
        console.log(err)
      }
    })

  }

  deleteUser(id:any){
    this.api.removeUser(id).subscribe({
      next:(res:any)=>{
        this.getAllProducts()
        console.log("deleted user",res)
        

      },error:(err:any)=>{
        // console.log(err)
      }
    })
    this.api.deleteAllBlog(id).subscribe({
      next:(res:any)=>{
        
        console.log("deleted all blogs by the user",res)
        

      },error:(err:any)=>{
        console.log(err)
      }


    })
    

  }



}
