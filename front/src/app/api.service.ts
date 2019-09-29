import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public config = new Configuration;
  checkStatus = new BehaviorSubject<boolean>(false);
  isUserLoggdIn=this.checkStatus.asObservable();
  constructor(private http:HttpClient) { 
  }

  checkLogin(){
    
    const token=localStorage.getItem('access_token');
    if(token){
      this.checkStatus.next(true);
    }else{
      this.checkStatus.next(false);
    }
  }


  registations(user:any){
    this.http.post(this.config.apiUrl+'register',user)
    .subscribe(
      data=>{console.log(data)},
      error=>{}
    )
  }


  login(user:any){
    this.http.post(this.config.apiUrl+'login',user)
    .subscribe(
      (checkUser:any)=>{
        if(checkUser.access_token){
          let user=checkUser.user;
          localStorage.setItem('access_token',checkUser.access_token);
          localStorage.setItem('user',user);
          return checkUser;
        }
      }
    )
  }
}
