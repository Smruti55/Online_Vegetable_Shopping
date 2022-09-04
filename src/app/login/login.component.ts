import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required])),
    password: new FormControl('',Validators.compose([Validators.required]))

  })

  constructor(private router: Router) {


  }

  ngOnInit(): void {
  }

  loginUser() {
   let item={...this.loginForm.value}
    console.log(item)


    let role = "";
    let isVaildUser = false;


    let userList = [
      {
        userName: 'akhil',
        password: 'akhil123',
        role: 'admin'
      },
      {
        userName: 'das',
        password: 'das123',
        role: 'user'
      }
    ]

    const { username, password } = item;
    userList.forEach((item1: any) => {
      if (item1.userName === username && item1.password === password) {
        isVaildUser = true;
        role = item1.role;
      }
    })
    if (isVaildUser && role === "admin") {
      this.router.navigate(["/admin"])
    }
    else if (isVaildUser && role === "user") {
      this.router.navigate(["/home"])
    } else {
      alert('user not found or not registered')
    }





  }

}
