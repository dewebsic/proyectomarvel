import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {CharactersService} from './services/characters.service';
import {AllCharacters} from './interfaces/all-characters';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters: Observable<AllCharacters[] | null>
  search = new FormControl('');
  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.charactersService.getAllCharacters();
  }

  onGetSearchCharacters(){
    let searchApi: string = '';

    if(this.search.value == ''){
      searchApi = 'a';
    }else{
      searchApi = this.search.value;
    }

    this.allCharacters = this.charactersService.getSearchCharacters(searchApi);
  }
}
