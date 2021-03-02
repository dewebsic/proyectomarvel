import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../shared/interfaces/user';
import {MustMatch} from '../helpers/must-match.validator';
import { MessageSwal } from 'src/app/shared/helpers/messageSwal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get name() { return this.registerForm.get('name')}
  get email() { return this.registerForm.get('email')}
  get password() { return this.registerForm.get('password') }
  get confirmPassword() { return this.registerForm.get('confirmPassword')}

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.registerForm = this.formBuilder.group({
        name: new FormControl('',
          [Validators.required,Validators.minLength(3)]),
        email: new FormControl('',
          [Validators.required,Validators.pattern(this.emailPattern)]),
        password: new FormControl('',
          [Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required)
      },{
        validator: MustMatch('password','confirmPassword')
      });
  }

  ngOnInit() {}

  onRegister(){

    //registro de usuario
    this.authService.register(
      this.registerForm.value.email,
      this.registerForm.value.password,
    ).then(resp => {

      const newUser: User = {
        uid: resp.uid,
        email: resp.email,
        emailVerified : resp.emailVerified,
        displayName : name,
        photoURL: resp.photoURL,
        role: 'SUBSCRIBER'
      };
      this.userUpdate(newUser);
    }).catch(err => {
      MessageSwal('error',false);
      console.log(err);
    });
  }


  private userUpdate(user: User){

    this.authService.updateUserData(user).then(resp => {
      //envio de email de verificación
      this.authService.sendVerificationEmail().then(resp => {
        //redirect
        this.router.navigate(['/home']).then(resp => {
          this.authService.logout().then(r => {
            MessageSwal('Registered Successfully,Email sent,check your inbox',true);
          }).catch(err => {
            console.log('error->', err)
          });
        }).catch(err => {
          MessageSwal('error',false);
          console.log('error->', err)
        });
      });


    }).catch(err => {

      MessageSwal('error',false);
      console.log(err);

    });
  }
}
