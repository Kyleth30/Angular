import { Injectable } from '@angular/core';
import { newTaskData } from '../new-task/newTaskData';
import { TaskComponent } from './task/task.component';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: newTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime.toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.duedate,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  closeDialog() {
    return false;
  }
}
