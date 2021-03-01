import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';
import {User} from '../../shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get name() { return this.registerForm.get('name')}
  get email() { return this.registerForm.get('email')}
  get password() { return this.registerForm.get('password') }

  registerForm = new FormGroup({
    name: new FormControl('',
      [Validators.required,Validators.minLength(3)]),
    email: new FormControl('',
      [Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',
      [Validators.required,Validators.minLength(6)])
  });

  constructor(private authService: AuthService,private router: Router) { }

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
      this.authService.updateUserData(newUser).then(resp => {
          //envio de email de verificación
          this.authService.sendVerificationEmail().then(resp => {
            //redirect
            this.router.navigate(['/home']).then(resp => {
              this.authService.logout().then(r => {
                this.message('registrado correctamente',true);
              }).catch(err => {
                console.log('error->', err)
              });
            }).catch(err => {
              this.message('error',false);
              console.log('error->', err)
            });
      });


      }).catch(err => {

        this.message('error',false);
        console.log(err);

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
