import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicComponent } from './components/comic/comic.component';
import { DetailComicComponent } from './components/detail-comic/detail-comic.component';
import { DialogComicComponent } from './components/dialog-comic/dialog-comic.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';



@NgModule({
  declarations: [ComicsComponent, ComicComponent, DetailComicComponent, DialogComicComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  entryComponents: [DialogComicComponent]
})

export class ComicsModule { }
