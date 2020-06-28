import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import {CatcardComponent} from './components/catcard/catcard.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { HttpClientModule } from "@angular/common/http";
import { InfocardComponent } from './components/infocard/infocard.component';

@NgModule({
  declarations: [
    AppComponent,
    CatcardComponent,
    NavbarComponent,
    InfocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
