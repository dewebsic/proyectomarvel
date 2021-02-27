import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AllComics} from '../../interfaces/all-comics';
import { ComicService } from '../../services/comic.service';
import {DialogComicComponent} from '../dialog-comic/dialog-comic.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail-comic',
  templateUrl: './detail-comic.component.html',
  styleUrls: ['./detail-comic.component.css']
})
export class DetailComicComponent implements OnInit, AfterContentInit{
  public comic: Observable<AllComics[] | null>
  private id: number;
  constructor(private comicService:ComicService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.comic = this.comicService.getComic(this.id);
  }
  ngAfterContentInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComicComponent,{
      data: this.comic,
    });

    dialogRef.afterClosed().subscribe(result => {
      //redirect
      this.router.navigate(['/comics']).then(resp => {
      }).catch(err => {
        console.log('error->', err)
      });
    });
  }
}
