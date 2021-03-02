/**
 *  MODULES
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MAT_DIALOG_DATA} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

/**
 *  COMPONENTS
 */
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { DialogCharacterComponent } from './components/dialog-character/dialog-character.component';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [CharactersComponent, CharacterComponent, DetailCharacterComponent, DialogCharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  entryComponents: [DialogCharacterComponent],

})
export class CharactersModule { }
