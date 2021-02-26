import {AfterContentInit, Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import {CharactersService} from './services/characters.service';
import {AllCharacters} from './interfaces/all-characters';
import {FormControl} from '@angular/forms';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit , AfterContentInit{
  public allCharacters: Observable<AllCharacters[] | null>
  search = new FormControl('');
  constructor(private charactersService: CharactersService,
              private dataServices: DataService) {}

  ngOnInit() {
    this.dataServices.nameTitle = 'Search Characters';
  }

  ngAfterContentInit() {
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
