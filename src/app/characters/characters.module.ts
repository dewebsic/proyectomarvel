import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './components/character/character.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { DialogCharacterComponent } from './components/dialog-character/dialog-character.component';


@NgModule({
  declarations: [CharactersComponent, CharacterComponent, DetailCharacterComponent, DialogCharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  entryComponents: [DialogCharacterComponent]
})
export class CharactersModule { }
