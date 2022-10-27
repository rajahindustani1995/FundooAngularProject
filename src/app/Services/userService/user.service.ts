import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //token : any;

  constructor(private httpService:HttpService) { }


  registration(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }

  login(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    
    return this.httpService.postService('/User/Login',reqdata,false,header)
  }

  forgetpassword(reqdata:any, token:any){
    console.log(reqdata,token);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        Authorization : 'Bearer '+ token
      })
    }
    
    return this.httpService.putService(`/User/ResetPassword?password=${reqdata.Password}&newPassword=${reqdata.confirmpassword}'`,{},true,header)
  }

  forgetemail(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService(`/User/ForgotPassword?Email=${reqdata.Email}`,{},false,header)
  }
}
