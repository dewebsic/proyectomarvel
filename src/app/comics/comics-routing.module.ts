import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsComponent } from './comics.component';
import {DetailComicComponent} from './components/detail-comic/detail-comic.component';

const routes: Routes = [{
  path: '', children: [
    {
      path: '', component: ComicsComponent,
      children: [
        { path: 'detail/:id', component: DetailComicComponent}
      ]
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
