import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  obj:any="hi"
  array:any=[{name:"subin",mail:"mail1",password:"passpass"}]


  objectForm:any={

    name:this.array[0].name,
    mail:this.array[0].mail,
    password:this.array[0].password

  }

  onClick(){
    console.log(this.objectForm,"onbjectform")
  }

}
