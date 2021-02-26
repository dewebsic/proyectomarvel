import { Component, OnInit } from '@angular/core';
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
export class DetailCharacterComponent implements OnInit {

  public character: Observable<AllCharacters[] | null>

  constructor(private charactersService:CharactersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    activatedRoute.params.subscribe(params => {
      this.getOneCharacter(params.id);
    })
  }

  ngOnInit() {
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

  getOneCharacter(id: number): void{
      this.character = this.charactersService.getCharacter(id);
      console.log('character-->',this.character);
  }
}
