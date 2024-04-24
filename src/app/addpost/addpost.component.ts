import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  postId: any;
  BASE_URL:any

  myObject: any;
  demoimage:any="https://tse3.mm.bing.net/th?id=OIP.TrgpTxmKq4eg7LfTRaUWWgHaHa&pid=Api&P=0&h=180"
  imageofZero: any  //file url for preview
  imageFile:any;   //file

  getDataArray: any = []

  userDetails:any;





  constructor(private fb: FormBuilder, private api: ApiService, private toastr: ToastrService, private aroute: ActivatedRoute,private router:Router) {
    this.aroute.params.subscribe({
      next: (res: any) => {
        console.log(res)
        this.postId = res.id
        console.log(this.postId, "postid")

      }
    })

  }



  // posttitlevalue: string = this.getDataArray.map((product:any) => product.posttitle);
  // posttextvalue: string = this.getDataArray.map((product:any) => product.posttext);
  // postimgvalue: string = this.getDataArray.map((product:any) => product.postimg);








  ngOnInit() {
      this.userDetails=JSON.parse(sessionStorage.getItem('existingUser')||'{}')
      console.log(this.userDetails,"user")

    if (this.postId) {
      console.log("done")

      console.log(this.postForm, "postform")

      this.getEditDisplayData()
      
      this.BASE_URL = this.api.BASE_URL






    }


  }


  getEditDisplayData() {

    this.api.getSpecificBlogHome(this.postId).subscribe({
      next: (res: any) => {
        console.log(res, "editdataget")
        this.getDataArray = res

        console.log(this.getDataArray[0], "oninit")
        this.myObject = this.getDataArray[0];

        console.log(this.myObject, "foooo");


        console.log(this.getDataArray)

      }, error: (err: any) => {
        console.log(err)
      }

    })

  }


  postForm: any = {
    posttitle: '',
    posttext: '',
    // postimg: '',
    image:'',


  }

  onUpload(event: any) {
    

    
    const file:File = event.target.files[0]
    // this.postForm.image= file.name
    console.log(file)
    console.log(this.postForm.image)
    let fr =new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event)
      this.imageofZero=event.target.result //url from onload
      this.imageFile=file
      console.log(this.imageFile,"imagefilee")
      
    }
  
  }







  

  handlePosting() {
    console.log(this.postForm)

  

    const formData = new FormData();

    formData.append("posttitle", this.postForm.posttitle);
    formData.append("posttext", this.postForm.posttext);
    // formData.append("postimg", this.postForm.postimg);
    formData.append("image", this.imageFile);
    console.log(formData,"formdata")




    this.api.createBlog(formData).subscribe({
      next: (res: any) => {
        console.log(res)
        this.toastr.success("Blog successfully published")
        this.router.navigateByUrl('/home')
        
        // this.postForm.reset()


      }, error: (err) => {
        this.toastr.warning("Enter valid details")
        console.log(err)

      }
    })


  }


  

  handleEditing() {
    console.log(this.myObject)
    const formData = new FormData();

    formData.append("posttitle", this.myObject.posttitle);
    formData.append("posttext", this.myObject.posttext);
    // formData.append("postimg", this.postForm.postimg);
    formData.append("image", this.imageFile);
    formData.append("updatedimage",this.myObject.image)

    console.log(formData,"formdata")
    console.log(this.imageFile)
    

    this.api.editBlog(formData, this.postId).subscribe({
      next: (res: any) => {
        console.log(res, "editing after")
        this.toastr.success("Blog successfully edited")
        this.router.navigateByUrl('/home')

      }, error: (err: any) => {
        console.log(err)
      }

    })

  }

}
