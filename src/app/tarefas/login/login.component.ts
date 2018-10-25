import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = new User();
  constructor(private tarefaService: TarefaService, private router: Router) { }
  ngOnInit() {
  }
  loginUser() {
    if(this.validatorUser() && this.tarefaService.isValid(this.newUser)){
      this.router.navigate(['/tarefas/dash'])
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