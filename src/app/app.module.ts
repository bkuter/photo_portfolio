import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
//import { NavComponent } from './nav/nav.component';
//import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
