import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanInvitedGuard implements CanActivate {

  public valida: boolean = false;


  constructor(private authService: AuthService, private router: Router) {}

  canActivate():boolean {
      this.authService.user$.subscribe(resp => {
          if(resp == null){
            this.valida = true;
          }else{
            this.valida = false;
            this.router.navigate(['/home']).then(resp => {}).catch(err => {
              console.log('err->',err);
            })
          }
      });
      return this.valida;
  }
}
