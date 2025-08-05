import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from './app/tasks/tasks.service';
import { SharedModule } from './app/shared/card/shared.module';
import { TaskModule } from './app/shared/card/task.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, FormsModule, SharedModule, TaskModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
