import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../shared/services/data.service';
import {AllComics} from './interfaces/all-comics';
import {ComicService} from './services/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html'
})
export class ComicsComponent implements OnInit, AfterContentInit{

  public allComics: AllComics[];
  search = new FormControl('');

  constructor(private comicService: ComicService,
              private dataServices: DataService) {}

  ngOnInit() {
    this.dataServices.nameTitle = 'Search Comics';
  }

  ngAfterContentInit() {
    this.getComics();
  }

  getComics(){
    this.comicService.getAllComics().subscribe(resp => {
      this.allComics = resp;
    });
  }

  onGetSearchComics(){
    let searchApi: string = '';

    if(this.search.value == ''){
      searchApi = 'a';
    }else{
      searchApi = this.search.value;
    }

    this.comicService.getSearchComics(searchApi).subscribe(resp => {
      this.allComics = resp;
    });
  }

}
