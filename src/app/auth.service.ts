import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class AuthService {

  private users : Array<User> = [

  ]

  constructor() { }

  isValid(user : User){ 
    let result : boolean = false 
    this.users.forEach(element=>{
      if(element.email === user.email && element.password === user.password){
        result = true
      }
    })
    return result
  }
  
  //método para adicinar objeto ao array
  add(newUser){
    this.users.push(newUser)
  }
}
