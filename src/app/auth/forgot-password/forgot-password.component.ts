import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageSwal} from '../../shared/helpers/messageSwal';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  onReset(){

      this.authService.resetPassword(this.userEmail.value).then(resp=> {

          MessageSwal('Email sent,check your inbox',true);

          //redirect
          this.router.navigate(['/login']).then(resp => {
          }).catch(err => {
            MessageSwal('error',false);
            console.log('error->', err)
          });

      }).catch(err => {
          MessageSwal('error',false);
          console.log('error->',err);
      });
  }

}
