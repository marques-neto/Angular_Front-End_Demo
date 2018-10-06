import { Injectable } from '@angular/core';
import { user } from './models/user';

@Injectable()
export class AuthService {



  users : Array<user> = [
    {nome: 'neto', email: 'netoguitars@gmail.com', password: '123456'}
  ]


  constructor() { }

  isValid(user : user) : boolean{
    this.users.forEach((element)=>{
      if(element.email === user.email, element.password === user.password){
        return true
      }
    })
    return false;
  }
}
