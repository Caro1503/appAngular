import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationModule } from './core/components/navigation/navigation.module';
import { APP_BASE_HREF } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent
  ], 
  imports: [
    BrowserModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
