import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get email() { return this.registerForm.get('email')}
  get password() { return this.registerForm.get('password') }

  registerForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',
      [Validators.required,Validators.minLength(6)])
  });

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {}

  onRegister(){
    this.authService.register(
      this.registerForm.value.email,
      this.registerForm.value.password
    ).then(resp => {
      this.message('registrado correctamente',true);

      //redirect
      this.router.navigate(['/home']).then(resp => {
      }).catch(err => {
        this.message('error',false);
        console.log('error->', err)
      });

    }).catch(err => {
      this.message('error',false);
      console.log(err);
    });
  }

  /**
   *
   * METODO PARA MOSTRAR UN MENSAJE EN MODAL
   */
  message(message: string,icon: boolean) {

    if(icon){
      Swal.fire(message, 'Aceptar!', 'success').then(r => {});
    }else{
      Swal.fire(message, 'Aceptar!', 'warning').then(r => {});
    }

  }
}
