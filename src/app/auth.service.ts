import { Injectable } from '@angular/core';
import { User } from './models/user';
@Injectable()
export class AuthService {
  users: Array<User> = [
    { nome: 'neto', email: 'netoguitars@gmail.com', password: '123456' }
  ]
  constructor() { }
  isValid(user: User): boolean {
    this.users.forEach((element) => {
      if (element.email === user.email && element.password === user.password) {
        return true
      }
    })
    return false;
  }
}
