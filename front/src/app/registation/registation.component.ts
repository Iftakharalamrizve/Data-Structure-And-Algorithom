import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  public forms={
    name:null,
    email:null,
    password:null,
    c_password:null
  }
  
  onFormSubmit(){
    this.api.registations(this.forms);
  }

}
