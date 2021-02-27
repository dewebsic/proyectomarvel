import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { CreatorComponent } from './components/creator/creator.component';
import { DetailCreatorComponent } from './components/detail-creator/detail-creator.component';
import { DialogCreatorComponent } from './components/dialog-creator/dialog-creator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [CreatorsComponent, CreatorComponent, DetailCreatorComponent, DialogCreatorComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  entryComponents: [DialogCreatorComponent]
})
export class CreatorsModule { }
