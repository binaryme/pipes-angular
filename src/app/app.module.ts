import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EuroPipe } from './pipes/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
