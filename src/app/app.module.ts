import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';

/**
 *  MODULES
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './home/home.module';

/**
 *  COMPONENTS
 */
import { AppComponent } from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import { SplashScreenComponent } from './components/splash-animation/splash-screen.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { InterceptorService } from './shared/services/interceptor.service';

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
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  providers: [AngularFirestore,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
    exports: [
        SplashScreenComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
