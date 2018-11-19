import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BannerComponent } from './header/banner/banner.component';
import { MenuComponent } from './header/menu/menu.component';
import { SignInComponent } from './header/menu/sign-in/sign-in.component';

import { PlansService } from './services/plans.service'
import { UsersService } from './services/users.service';
import { CarouselComponent } from './footer/carousel/carousel.component';
import { ContatcComponent } from './footer/contatc/contatc.component';
import { PlanosComponent } from './content/planos/planos.component';
import { DownloadsComponent } from './content/downloads/downloads.component';
import { UsersComponent } from './content/users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    BannerComponent,
    MenuComponent,
    SignInComponent,
    CarouselComponent,
    ContatcComponent,
    PlanosComponent,
    DownloadsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlansService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
