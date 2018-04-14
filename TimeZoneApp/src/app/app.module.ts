import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeZoneAppComponentComponent } from './time-zone-app-component/time-zone-app-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeZoneAppComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
