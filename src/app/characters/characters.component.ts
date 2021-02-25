import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {CharactersService} from './services/characters.service';
import {AllCharacters} from './interfaces/all-characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters: Observable<AllCharacters[]>

  constructor(private charactersService: CharactersService) {

  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){

    this.allCharacters = this.charactersService.getAllCharacters();

    console.log('characters->',this.allCharacters);
  }
}
