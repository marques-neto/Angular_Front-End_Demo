import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  tarefas: Tarefa[];

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(private tarefaService: TarefaService, private router: Router) { }
  ngOnInit() {
    this.tarefa = new Tarefa();
    this.tarefas = this.listarTodos();
  }
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
  cadastrar(): void {
      this.tarefaService.cadastrar(this.tarefa);
      this.ngOnInit(); 
  }
}
