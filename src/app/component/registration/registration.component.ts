import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/Userservices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false; 

  constructor(private formBuilder: FormBuilder, private user: UserService) { }
 
   ngOnInit(): void {
 
    this.registerForm = this.formBuilder.group({
       firstName: ['', Validators.required ],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword: ['', Validators.required],
       service: "advance"
     });
   }
 
   get f() { return this.registerForm.controls; }
 
  onSubmit() {
      this.submitted = true; 
     if (this.registerForm.valid) {
         let reqdata = {
         firstName: this.registerForm.value.firstName,
         lastName: this.registerForm.value.lastName,
         email: this.registerForm.value.email,
         password: this.registerForm.value.password,
         service: this.registerForm.value.service
      }  
       this.user.registration(reqdata).subscribe((Response: any) => {
         console.log(Response);
         console.log("Regi error");
       }); 
   
       }
   }
}  
 