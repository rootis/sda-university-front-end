import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { UniversityComponent } from './components/university/university.component';
import { StudyProgramListComponent } from './components/study-program-list/study-program-list.component';
import { UniversityModalComponent } from './components/university-modal/university-modal.component';
import { LoginComponent } from './components/login/login.component';
import { InputComponent } from './shared/input/input.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListItemComponent } from './shared/list-item/list-item.component';
import { PanelComponent } from './shared/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    UniversityComponent,
    StudyProgramListComponent,
    UniversityModalComponent,
    LoginComponent,
    InputComponent,
    ListItemComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
