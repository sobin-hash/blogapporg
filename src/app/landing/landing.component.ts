import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  isLogged:any=false

  ngOnInit() {
    if(sessionStorage.getItem('existingUser')){
      this.isLogged=true
    }
    
  }

}
