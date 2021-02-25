import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl} from '@angular/forms';
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {}

  onReset(){

      this.authService.resetPassword(this.userEmail.value).then(resp=> {

          this.message('Email sent,check your inbox',true);
          //redirect
          this.router.navigate(['/login']).then(resp => {
          }).catch(err => {
            this.message('error',false);
            console.log('error->', err)
          });

      }).catch(err => {
          this.message('error',false);
          console.log('error->',err);
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
