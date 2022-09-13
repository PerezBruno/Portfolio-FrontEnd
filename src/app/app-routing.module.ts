import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckMailComponent } from './components/firebase/check-mail/check-mail.component';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { LoginComponent } from './components/firebase/login/login.component';
import { RecoverPasswordComponent } from './components/firebase/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/firebase/register-user/register-user.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'registrar-usuario', component: RegisterUserComponent},
  {path:'verificar-correo', component: CheckMailComponent },
  {path:'recuperar-password', component: RecoverPasswordComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'messagesadmin', component: MessagesComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
