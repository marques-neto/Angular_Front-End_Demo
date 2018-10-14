import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, Validators, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,  FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
