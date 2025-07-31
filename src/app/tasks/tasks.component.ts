import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  @Output() newTask = new EventEmitter();
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Crustaceans arent real',
      dueDate: '2024-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'See Sonic',
      summary: 'Domain Expansion',
      dueDate: '2024-3-13',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Eat potato',
      summary: 'Dont die',
      dueDate: '2024-4-22',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onDeleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onNewTask() {
    this.newTask.emit();
  }
}
