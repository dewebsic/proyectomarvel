import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreatorsComponent} from './creators.component';
import {DetailCreatorComponent} from './components/detail-creator/detail-creator.component';

const routes: Routes = [{
  path: '', children: [
    {
      path: '', component: CreatorsComponent,
      children: [
        { path: 'detail/:id', component: DetailCreatorComponent}
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
