import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { DashComponent } from './dash';
import { EditarTarefasComponent } from './editar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    DashComponent,
    EditarTarefasComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
