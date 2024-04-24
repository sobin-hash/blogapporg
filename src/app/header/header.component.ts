import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchEventEmitter = new EventEmitter ()

  islogged:any=false;
  searchtext:any;
  ngOnInit(): void {

  if(sessionStorage.getItem('existingUser'||'existingAdmin')){
    this.islogged=true

  }

    
  }
  onSearch(){
    this.searchEventEmitter.emit(this.searchtext)

  }




  onLogOut(){
    sessionStorage.clear()
  }
  

}
