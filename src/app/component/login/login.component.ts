import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/Userservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService ,private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: "advance"
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: this.loginForm.value.service
      }
      this.user.login(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token",response.id)
        this.router.navigateByUrl('/dashboard')
       // router .navigetbyurl through dashboard
      });
    }
  }
}



