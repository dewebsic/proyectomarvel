import { Injectable } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  public callSpinner(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.show();
    }, 100);
  }

  public stopSpinner(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 100);
  }
}
