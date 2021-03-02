import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CharactersService} from '../../services/characters.service';
import { MatDialog } from '@angular/material';
import {DialogCharacterComponent} from '../dialog-character/dialog-character.component';
import {Observable} from 'rxjs';
import {AllCharacters} from '../../interfaces/all-characters';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements AfterViewInit{

  public character: Observable<AllCharacters[] | null>
  private id: number;
  constructor(private charactersService:CharactersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    activatedRoute.params.subscribe(params => {
     this.id = params.id;
    });
  }

  ngAfterViewInit() {
    this.character = this.charactersService.getCharacter(this.id);
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogCharacterComponent,{
      data: this.character,
    });

    dialogRef.afterClosed().subscribe(result => {
      //redirect
      this.router.navigate(['/characters']).then(resp => {
      }).catch(err => {
        console.log('error->', err)
      });
    });
  }

}
