import { AuthGuard } from './tarefas/guards/auth-guard';
import { TarefaService } from './tarefas/shared/tarefa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [TarefaService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
