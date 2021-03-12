import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import {APP_ROUTING} from './app.routes'
// services
import {HeroesService} from './services/heroe.service'
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


/**
 * declarations: componentes
 * imports: modulos
 * providers: servicios
 * bootstrap: ?
 */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
