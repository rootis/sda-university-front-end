import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { UniversityComponent } from './components/university/university.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
