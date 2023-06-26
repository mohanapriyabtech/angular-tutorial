import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = 'priya';
  enteredName: string = '';

  loginForm: FormGroup;

constructor() {
  this.loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
}

  ngOnInit(): void {
    
  }

}
