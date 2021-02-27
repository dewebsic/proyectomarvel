import {Component, Input, OnInit} from '@angular/core';
import {AllComics} from '../../interfaces/all-comics';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic: AllComics;
  constructor() { }
  ngOnInit() {}

}
