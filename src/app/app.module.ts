import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonDeleteAllComponent,
    TodoListComponent,
    HeaderComponent,
    TaskInputComponent
  ],
  exports: [
    ButtonDeleteAllComponent,
    TodoListComponent,
    HeaderComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
