import { Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor(private spinnerService: SpinnerService) {}

  intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.callSpinner();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.stopSpinner())
    );

  }
}
