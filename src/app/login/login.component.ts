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
    if (this.newUser.email === '' && this.newUser.password === '') {
      alert('Login inválido')
    } else {
      this.validatorUser()
    }
  }
  validatorUser() {
    if (this.auth.isValid(this.newUser)) {
      this.route.navigate(['dash'])
    } else {
      alert('Login inválido')
    }
  }
}
