import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;

  constructor(private HttpClient: HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={}){

    return this.HttpClient.post(this.baseUrl+url,reqdata,token && httpOptions)
  }

}
