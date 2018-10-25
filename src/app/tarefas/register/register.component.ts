import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : User = new User()

  constructor(private tarefaService : TarefaService, private router : Router) { }
 
  //método para criar objeto
  createUser(){
    this.tarefaService.add(this.newUser)
    this.router.navigate(['/tarefas/login'])
    
  }

  ngOnInit() {
  }

}