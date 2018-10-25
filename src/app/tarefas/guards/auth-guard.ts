import { TarefaService } from './../shared/tarefa.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private tarefaService : TarefaService, private router : Router) { }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ): Observable<boolean> | boolean {

    if (this.tarefaService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/tarefas/login']);

    return false;

  }

}
