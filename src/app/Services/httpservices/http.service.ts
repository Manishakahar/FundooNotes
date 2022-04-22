import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;  // baseUrl variable

  constructor(private HttpClient: HttpClient) { } // object of httpClient

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={}){ //  pass the parameter

    return this.HttpClient.post(this.baseUrl+url,reqdata,token && httpOptions) 
  }

  getService(url: string, token: boolean= false, httpOptions: any={}){ 

     return this.HttpClient.get(this.baseUrl+url,token && httpOptions) 
  }

  
}
          