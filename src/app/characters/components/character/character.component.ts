import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AllCharacters } from '../../interfaces/all-characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: AllCharacters;
  constructor() { }
  ngOnInit() {}
}
