import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required])),
    password: new FormControl('',Validators.compose([Validators.required]))

  })

  constructor(private router: Router,public header:HeaderService) {


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
      this.router.navigate(["/admin-home"])
    }
    else if (isVaildUser && role === "user") {
      this.router.navigate(["/home"])
    } else {
      alert('user not found or not registered')
    }

    // this.router.navigateByUrl('/cart-page');



  }
}
