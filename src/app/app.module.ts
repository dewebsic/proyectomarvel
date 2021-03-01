import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './home/home.module';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {environment} from '../environments/environment';
import {CanUserGuard} from './auth/guards/can-user.guard';
import {AngularFirestore} from '@angular/fire/firestore';
import {NgxSpinnerModule} from 'ngx-spinner';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
import { SplashScreenComponent } from './splash-screen/components/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SplashScreenComponent
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
    NgxSpinnerModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [CanUserGuard,AngularFirestore,
    ],
    exports: [
        SplashScreenComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
