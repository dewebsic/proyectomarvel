import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanInvitedGuard implements CanActivate {

  public validate: boolean = false;


  constructor(private authService: AuthService, private router: Router) {}

  canActivate():boolean {
      this.authService.user$.subscribe(resp => {
          if(resp == null){
            this.validate = true;
          }else{
            this.validate = false;
            if(resp.emailVerified){
              this.router.navigate(['/home']).then(resp => {}).catch(err => {
                console.log('err->',err);
              })
            }
          }
      });
      return this.validate;
  }
}
