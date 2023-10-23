import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetListComponentComponent } from './components/planet-list-component/planet-list-component.component';
import { PlanetItemComponentComponent } from './components/planet-item-component/planet-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponentComponent,
    PlanetItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
