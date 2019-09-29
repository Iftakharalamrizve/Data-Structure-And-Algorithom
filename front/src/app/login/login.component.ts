import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loggedIn=false;
  constructor(private api :ApiService,private route : Router) { }

  ngOnInit() {
  }
  public forms={
    email:null,
    password:null
  }
  
  onFormSubmit(){
    this.api.login(this.forms);
    this.api.isUserLoggdIn.subscribe(val=>{
      this.loggedIn=val;
      this.route.navigate(['/dashboard'])
    })
  }
}
