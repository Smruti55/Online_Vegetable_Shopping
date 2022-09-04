import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../services/register-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  passwordPtn ='^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
  usernamePattern = "[A-Z][A-Za-z0-9]{3,20}"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  
  users: any;
  registerForm: FormGroup;
  constructor(private formBuilder:FormBuilder, 
              private regsisterservice:RegisterServiceService,
              private router :Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName:new FormControl("",[Validators.required,
                                  Validators.minLength(5),Validators.pattern("[a-zA-Z].*")]),
      // email: new FormControl("",[Validators.required,Validators.email]),
      mobile: new FormControl("",[Validators.required,
        Validators.pattern("['0-9']*"),
        Validators.minLength(10),
        Validators.maxLength(10)]),
      userPassword: new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitRegistration(){
     console.warn(this.registerForm.value)

    this.regsisterservice.registerUser(this.registerForm.value).subscribe(result =>{
      alert("User registed successfully.")
    });
  }
  
}


