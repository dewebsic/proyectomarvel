import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './components/character/character.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ]
})
export class CharactersModule { }
