import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AllCharacters } from '../../interfaces/all-characters';
import {DataService} from '../../../shared/services/data.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: AllCharacters;
  constructor(private dataService: DataService) { }
  ngOnInit() {}

  onIdCharacter(id: number){
      this.dataService.id = id;
  }
}
