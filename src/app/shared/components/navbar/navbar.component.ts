import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {}

  onLogout(){
    this.authService.logout().then(res=> {
      //redirect
      this.router.navigate(['/home']).then(resp => {
      }).catch(err => {
        console.log('error->', err)
      });
    }).catch(err => {
      console.log('error->',err);
    });
  }
}
