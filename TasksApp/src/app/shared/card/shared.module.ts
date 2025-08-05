import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { TasksComponent } from '../../tasks/tasks.component';
import { NewTaskComponent } from '../../new-task/new-task.component';

@NgModule({
  declarations: [CardComponent],
  // udostepnia w exporcie
  exports: [CardComponent],
})
export class SharedModule {}
