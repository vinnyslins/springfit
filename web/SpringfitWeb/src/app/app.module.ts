import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
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
import { ContactComponent } from './footer/contact/contact.component';
import { PlansComponent } from './content/plans/plans.component';
import { DownloadsComponent } from './content/downloads/downloads.component';
import { UsersComponent } from './content/users/users.component';
import { HomeComponent } from './content/home/home.component';
import { EditUserComponent } from './content/users/edit-user/edit-user.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  
  { path: 'users', component: UsersComponent},
  { path: 'home', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent}
 ];

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
    ContactComponent,
    PlansComponent,
    DownloadsComponent,
    UsersComponent,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
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
