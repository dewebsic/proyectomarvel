import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import {SendEmailComponent} from './components/send-email/send-email.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'verification-email', component: SendEmailComponent}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
