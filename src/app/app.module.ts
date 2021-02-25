import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './home/home.module';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {environment} from '../environments/environment';
import {CanUserGuard} from './auth/guards/can-user.guard';
import {AngularFirestore} from '@angular/fire/firestore';
import {InterceptorService} from './shared/services/interceptor.service';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxSpinnerModule

  ],
  providers: [CanUserGuard,AngularFirestore,
      {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
    ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
