import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : User = new User()

  constructor(private auth : AuthService, private route : Router) { }
 
  //método para criar objeto
  createUser(){
    this.auth.add(this.newUser)
    this.route.navigate(['login'])
    
  }

  ngOnInit() {
  }

}
