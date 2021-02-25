import { Injectable } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  public callSpinner(){
    this.spinner.show().then(r=> {
    }).catch(err => {
      console.log('error->',err);
    });
  }

  public stopSpinner(){
    this.spinner.hide().then(r => {
    }).catch(err => {
      console.log('error->',err);
    });
  }
}
