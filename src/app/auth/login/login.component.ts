import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MessageSwal} from '../../shared/helpers/messageSwal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public session:boolean = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get email() { return this.loginForm.get('email')}
  get password() { return this.loginForm.get('password') }

  loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',
      [Validators.required,Validators.minLength(6)])
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  onLogin(){

    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(resp => {

      if(!resp){
        this.session = true;
      }else{
        this.session = false;

        if(resp.emailVerified){
            //redirect
            this.router.navigate(['/home']).then(resp => {
            }).catch(err => {
              MessageSwal('error',false);
              console.log('error->', err)
            });

        }else{
          //redirect
          this.router.navigate(['/login/verification-email']).then(resp => {
          }).catch(err => {
            MessageSwal('error',false);
            console.log('error->', err)
          });

        }
      }

    }).catch(err => {
      MessageSwal('error',false);
      console.log('error->', err);
    })
  }

  onGoogleLogin(){

    this.authService.loginGoogle().then(resp => {

        //redirect
        this.router.navigate(['/home']).then(resp => {
        }).catch(err => {
          MessageSwal('error',false);
          console.log('error->', err)
        });

      }).catch(err => {
          console.log('error->',err);
      });
  }
}
