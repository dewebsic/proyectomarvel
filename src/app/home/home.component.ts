import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.nameTitle = 'Welcome to Marvel';
  }

}
