import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponentComponent } from './alpha-component/alpha-component.component';
import { BetaComponentComponent } from './alpha-component/beta-component/beta-component.component';
import { GammaComponentComponent } from './alpha-component/beta-component/gamma-component/gamma-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponentComponent,
    BetaComponentComponent,
    GammaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
