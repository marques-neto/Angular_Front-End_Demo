import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Tarefa } from './';

@Injectable()

export class TarefaService {

  private users : Array<User> = []

  private usuarioAutenticado: boolean = false;

  constructor() { }

  isValid(user : User){ 
    let result : boolean = false 
    this.users.forEach(element=>{
      if(element.email === user.email && element.password === user.password){
        result = true;
        this.usuarioAutenticado = true;
      }
    })
    return result
  }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  add(newUser){
    this.users.push(newUser)
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;

  }
}
