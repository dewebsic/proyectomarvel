import {Component, Input, OnInit} from '@angular/core';
import { AllCreators } from '../../interfaces/all-creators';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  @Input() creator: AllCreators;
  constructor() { }

  ngOnInit() {
  }

}
