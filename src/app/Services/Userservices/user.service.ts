import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpService: HttpService) { } // obj of httpService

  registration(reqdata: any) { 
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization': 'token'
      })
    }
    return this.httpService.postService('/user/userSignUp', reqdata, false, header)
  }

  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      Headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService('/user/login', reqdata, false, header)
  }


  forget(reqdata: any) {
    console.log(reqdata);

    let header = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postService('/user/reset', reqdata, false, header)
  }
}

 