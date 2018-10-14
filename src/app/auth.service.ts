import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class AuthService {
  findAll(): string[]{
    if(localStorage.getItem('tarefasList') != null)
    {
      return JSON.parse(localStorage.getItem('tarefasList'));
    }
    return null;
  }

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
  addTarefa(title : string): void{

    if(localStorage.getItem('tarefasList') == null){

      let list: string[] = [];

      list.push(title);

      localStorage.setItem('tarefasList', JSON.stringify(list));

    }else{
      let list: string[] = JSON.parse(localStorage.getItem('tarefasList'));
      list.push(title);
      localStorage.setItem('tarefasList', JSON.stringify(list));
    }

  }

  

  deletTarefa(index: number): void{
    let list: string[] = JSON.parse(localStorage.getItem('tarefasList'));
    list.splice(index, 1);
    localStorage.setItem('tarefasList', JSON.stringify(list));

  }
}
