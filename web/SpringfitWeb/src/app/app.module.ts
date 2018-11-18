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

import { PlanosService } from './services/planos.service'
import { AlunosService } from './services/alunos.service';
import { CarouselComponent } from './footer/carousel/carousel.component';
import { ContatcComponent } from './footer/contatc/contatc.component';
import { PlanosComponent } from './content/planos/planos.component'

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
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlanosService,
    AlunosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
