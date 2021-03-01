import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanUserGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.user$.pipe(
          take(1),
          map( (user) => user && this.authService.isSubscriber(user) && user.emailVerified),
          tap( canUser => {
              if(!canUser){
                 window.alert('Access denied. Must have permission to edit. ');
              }
          })
      );
  }

}
