/**
 *  MODULES
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

/**
 *  COMPONENTS
 */
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ApiSectionComponent } from './components/api-section/api-section.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, ApiSectionComponent],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
