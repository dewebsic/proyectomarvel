import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpinnerService} from './spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      this.spinnerService.callSpinner();
      return next.handle(req).pipe(
         finalize(() => this.spinnerService.stopSpinner())
      );
  }
}
