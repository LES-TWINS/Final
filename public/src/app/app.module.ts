import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    GamesComponent,
    AboutComponent,
    TechnologyComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
