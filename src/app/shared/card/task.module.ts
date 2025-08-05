import { NgModule } from '@angular/core';
import { NewTaskComponent } from '../../new-task/new-task.component';
import { TaskComponent } from '../../tasks/task/task.component';
import { TasksComponent } from '../../tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  imports: [FormsModule, DatePipe, SharedModule],
  providers: [],
  exports: [TasksComponent, DatePipe],
})
export class TaskModule {}
