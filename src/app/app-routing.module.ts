import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskAddComponent } from './task-add/task-add.component';


const routes: Routes = [
  {path:'', redirectTo:'/tasks',pathMatch:'full'},
  {path:'tasks', component:TasksListComponent},
  {path:'tasks/:id', component:TaskDetailComponent},
  {path:'addTask', component:TaskAddComponent},
  {path:'**', component:PageNotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
