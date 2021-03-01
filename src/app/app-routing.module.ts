import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanUserGuard} from './auth/guards/can-user.guard';
import {SplashScreenComponent} from './splash-screen/components/splash-screen.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule),
    canActivate: [CanUserGuard]
  },
  { path: 'comics', loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule),
    canActivate: [CanUserGuard]
  },
  { path: 'creators', loadChildren: () => import('./creators/creators.module').then(m => m.CreatorsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
