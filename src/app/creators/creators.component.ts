import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../shared/services/data.service';
import {AllCreators} from './interfaces/all-creators';
import {CreatorService} from './services/creator.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit, AfterContentInit{

  public allCreators: AllCreators[];
  search = new FormControl('');

  constructor(private creatorService: CreatorService,
              private dataServices: DataService) {}

  ngOnInit() {
    this.dataServices.nameTitle = 'Search Creators';
  }

  ngAfterContentInit() {
    this.getCreators();
  }

  getCreators(){
    this.creatorService.getAllCreators().subscribe(resp => {
      this.allCreators = resp;
    });
  }

  onGetSearchCreators(){
    let searchApi: string = '';

    if(this.search.value == ''){
      searchApi = 'a';
    }else{
      searchApi = this.search.value;
    }

    this.creatorService.getSearchCreators(searchApi).subscribe(resp => {
      this.allCreators = resp;
    });
  }

}
