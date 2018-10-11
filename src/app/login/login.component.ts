import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = new User();
  constructor(private auth: AuthService, private route: Router) { }
  ngOnInit() {
  }
  loginUser() {
    if(this.validatorUser() && this.auth.isValid(this.newUser)){
      this.route.navigate(['dash'])
    }else{
      window.alert('Login inválido')
    }
  }
  validatorUser() {
    if(this.newUser.email === '' || this.newUser.password === ''){
      return false
    }else{
      return true
    }
  }
}
