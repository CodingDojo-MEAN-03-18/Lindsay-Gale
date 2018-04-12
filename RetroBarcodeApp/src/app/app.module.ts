import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RetroBarcodeComponentComponent } from './retro-barcode-component/retro-barcode-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RetroBarcodeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
