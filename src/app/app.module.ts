import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// feature modules
import { AuthModule } from './auth/auth.module';

// 3rd party modules
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      StopTrainingComponent
  ]
})
export class AppModule { }
