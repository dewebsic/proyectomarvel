import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Observable} from 'rxjs';
import Swal from "sweetalert2";

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  public user$:Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSendEmail() : void {
      this.authService.sendVerificationEmail().then(r => {
        this.message('sent verification email',true);
      }).catch(err => {
          this.message('error',err);
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
