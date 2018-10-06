import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser : user = new user();
  email : string;
  password : string;

  constructor() { }

  ngOnInit() {
  }
  loginUser(){
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    
  }

}
