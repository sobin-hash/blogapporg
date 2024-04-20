import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogged:any=false;
  ngOnInit(): void {

  if(sessionStorage.getItem('existingUser')){
    this.islogged=true

  }

    
  }


  onLogOut(){
    sessionStorage.clear()
  }
  

}
