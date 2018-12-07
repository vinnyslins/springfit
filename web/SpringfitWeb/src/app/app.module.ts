import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './header/banner/banner.component';
import { MenuComponent } from './header/menu/menu.component';
import { SignInComponent } from './header/menu/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

import { PlansService } from './services/plans.service'
import { UsersService } from './services/users.service';

import { CarouselComponent } from './footer/carousel/carousel.component';
import { ContactComponent } from './footer/contact/contact.component';
import { PlansComponent } from './content/plans/plans.component';
import { DownloadsComponent } from './content/downloads/downloads.component';
import { UsersComponent } from './content/users/users.component';
import { HomeComponent } from './content/home/home.component';
import { EditUserComponent } from './content/users/edit-user/edit-user.component';
import { UserComponent } from './content/users/user/user.component'

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ModalLoginComponent } from './header/banner/modal-login/modal-login.component';
import { ExercisesComponent } from './content/exercises/exercises.component';
import { ExerciseComponent } from './content/exercises/exercise/exercise.component';
import { EditExerciseComponent } from './content/exercises/edit-exercise/edit-exercise.component';

registerLocaleData(localeBr, 'pt');

const appRoutes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  
  { path: 'users', component: UsersComponent},
  { path: 'home', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent},
  { path: 'exercises', component: ExercisesComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    MenuComponent,
    SignInComponent,
    CarouselComponent,
    ContactComponent,
    PlansComponent,
    DownloadsComponent,
    UsersComponent,
    HomeComponent,
    EditUserComponent,
    UserComponent,
    ModalLoginComponent,
    ExercisesComponent,
    ExerciseComponent,
    EditExerciseComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    PlansService,
    UsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
