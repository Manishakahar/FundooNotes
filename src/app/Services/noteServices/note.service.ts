import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  id: any;

  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('token')
  }

  createNote(reqdata: any) {
    this.token=localStorage.getItem('token')
     console.log("inside note service",reqdata);

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':   this.token
      })
    }
    return this.httpService.postService('/notes/addNotes', reqdata, true, headers)
  }
    

  getNoteList(){
    this.token=localStorage.getItem('token')
    console.log("inside getnote service");
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getNotesList', true, headers)
  }


   updateNote(reqdata: any, id: any) {
    this.token=localStorage.getItem('token')
     console.log("inside note service",reqdata);

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':   this.token
      })
    }
    return this.httpService.postService('/notes/updateNotes'+id,reqdata, true, headers)
  }
}
