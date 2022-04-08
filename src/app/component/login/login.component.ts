import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email=new FormControl('',[Validators.required]);
  constructor() { }

  getErrorMessageForEmail(){
    return this.email.hasError('required')?'Email field cannot be blank':'';
  }

  ngOnInit(): void {
  }
}
