import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  todoForm: FormGroup;
  works: string[];
  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }
  ngOnInit() {  
    this.todoForm = this.formBuilder.group({
      title:['', [Validators.required]],
      // parei aqui !!!!!!
      data:['', [Validators.required]]
      //
    });
    this.works = this.auth.findAll();
   
  }


  add(): void{
    this.auth.addTarefa(this.todoForm.value.title);
    this.works = this.auth.findAll();
  }
  delete(index: number): void{
    var result = confirm('Tem certeza que deseja excluir a tarefa ?');
    if(result){
      this.auth.deletTarefa(index);
      this.works = this.auth.findAll();
    }



  }

}
