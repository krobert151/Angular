import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportModule } from './material-import/material-import/material-import.module';
import { AppComponent } from './app.component';
import { VehiclesListComponent } from './componets/vehicles-list/vehicles-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent
  ],
  imports: [
    MaterialImportModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
