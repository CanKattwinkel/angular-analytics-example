import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SiteAComponent} from "./site-a/site-a.component";
import {SiteBComponent} from "./site-b/site-b.component";

@NgModule({
  declarations: [
    AppComponent,
    SiteAComponent,
    SiteBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
