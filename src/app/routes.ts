import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { RegisterComponent } from './register/register.component';

export const routes : Routes = [
    {path : 'login' , component : LoginComponent },
    {path : 'dash' , component : DashComponent},
    {path : 'register', component : RegisterComponent},
    {path : '', redirectTo : 'login', pathMatch : 'full'}
]