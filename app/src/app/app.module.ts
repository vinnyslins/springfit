import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { MyDataPage } from '../pages/my-data/my-data';
import { ModalPage } from '../pages/modal/modal';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { UserProvider } from '../providers/user';
import { TrainProvider } from '../providers/train';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MyDataPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCircleProgressModule.forRoot({
      radius: 80,
      outerStrokeColor: "#58AF26"
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MyDataPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    UserProvider,
    TrainProvider
  ]
})
export class AppModule {}
