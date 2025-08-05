import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { newTaskData } from '../new-task/newTaskData';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  newTask = false;
  taskService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onNewTask() {
    this.newTask = true;
  }

  onAddTask(taskData: newTaskData) {
    this.taskService.addTask(taskData, '');
    this.onCloseDialog();
  }

  onCloseDialog() {
    console.log('Im Steve2');
    this.newTask = this.taskService.closeDialog();
  }
}
