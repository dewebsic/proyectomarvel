import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import {DetailCharacterComponent} from './components/detail-character/detail-character.component';

const routes: Routes = [{
  path: '', children: [
    {
      path: '', component: CharactersComponent,
      children: [
        { path: 'detail/:id', component: DetailCharacterComponent }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
