import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AppComponent } from './app.component';

const toDoRoutes: Routes = [
  {path: "todo", component: ToDoListComponent },
  {path: "home", component: AppComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(toDoRoutes)
  ]
})
export class AppRoutingModule { }
