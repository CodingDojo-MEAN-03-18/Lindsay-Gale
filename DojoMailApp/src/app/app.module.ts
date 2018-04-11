import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DojoMailComponentComponent } from './dojo-mail-component/dojo-mail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DojoMailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
