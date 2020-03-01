import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksApplicationComponent } from './tasks-application/tasks-application.component';
import { TasksAddComponent } from './tasks-application/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks-application/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksApplicationComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
