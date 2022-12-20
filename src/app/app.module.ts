import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
