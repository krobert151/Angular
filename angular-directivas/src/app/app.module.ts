import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { MaterialImportModule } from './material-import/material-import.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    MaterialImportModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
