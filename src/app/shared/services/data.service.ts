import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public nameTitle: string = '';
  public id: number = 0;

  constructor() { }

}
