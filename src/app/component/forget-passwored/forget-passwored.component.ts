import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Userservices/user.service';


@Component({
  selector: 'app-forget-passwored',
  templateUrl: './forget-passwored.component.html',
  styleUrls: ['./forget-passwored.component.scss']

})
export class ForgetPaswordComponent implements OnInit {
  forgetForm: FormGroup | any;
  submitted = false;
  token: any;
  

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: "advance"
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token'); }

  get f() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;

    {
      if (this.forgetForm.valid) {
        let reqdata = {
          email: this.forgetForm.value.email,
          service: this.forgetForm.value.Services
        }
            this.user.forget(reqdata).subscribe((Response: any) => {
           console.log(Response);
          //  localStorage.setItem("token",Response.id)
         });

      }
    }
  }
}
