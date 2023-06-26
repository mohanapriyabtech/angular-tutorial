import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '' ;
  // usernameControl: FormControl = new FormControl();

  loginForm = new FormGroup({

    username : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password : new FormControl('')

  })

  constructor() { }

  ngOnInit(): void {
  }
  logInUser(){
    console.warn(this.loginForm.value)
  }

  get User() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }
}
