import { Component, EventEmitter, inject, Output, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Task } from '../tasks/task/task.model';
import { newTaskData } from './newTaskData';
import { TasksService } from '../tasks/tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TasksService);

  onCloseDialog() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        duedate: this.enteredDueDate,
      },
      ''
    );
    this.closeDialog.emit();
  }
}
