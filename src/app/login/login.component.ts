import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser : user = new user();
  email : string;
  password : string;

  constructor(private auth : AuthService, private route : Router) { }

  ngOnInit() {
  }
  loginUser(){
    if(this.newUser.email === '' && this.newUser.password === ''){
      alert('Login inválido')
    }else{
      this.validatorUser()

    }
  }
  validatorUser(){
    if(this.auth.isValid(this.newUser)){
      this.route.navigate(['dash'])
      
    }else{
      alert('Login inválido')
    }
  }
}
