import { AuthGuard } from './guards/auth-guard';
import { Routes } from '@angular/router';

import { DashComponent } from './dash';
import { EditarTarefasComponent } from './editar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/login',
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefas/dash',
        component: DashComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefas/login',
        component: LoginComponent
    },
    {
        path: 'tarefas/register',
        component: RegisterComponent
    }
];