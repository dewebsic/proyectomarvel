import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get email() { return this.loginForm.get('email')}
  get password() { return this.loginForm.get('password') }

  loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',
      [Validators.required,Validators.minLength(6)])
  });

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(resp => {



    }).catch(err => {
      this.message('error',false);
      console.log('error->', err);
    })
  }

  /**
   *
   * METODO PARA MOSTRAR UN MENSAJE EN MODAL
   */
  message(message: string,icon: boolean) {

    if(icon){
      Swal.fire(message, 'Aceptar!', 'success');
    }else{
      Swal.fire(message, 'Aceptar!', 'warning');
    }

  }
}