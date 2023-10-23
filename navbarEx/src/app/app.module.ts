import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeScreenComponentComponent } from './ui/home-screen-component/home-screen-component.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyCardComponent } from './components/my-card/my-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponentComponent,
    NavBarComponent,
    MyCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
