import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from './task.interface';
import { TodoService } from './services/todo.service';
import { userInfo } from 'os';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {

  tasks: Task[] = [];
  newTask: string = '';

  constructor(private localStorage: TodoService) { }

  ngOnInit(): void {

    const dataRetrive = this.localStorage.getData('userData');
    if (dataRetrive) {
      this.tasks = dataRetrive;
    }

  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);

      this.localStorage.saveData('userData', this.tasks);

      this.newTask = '';
    }
  }

  removeTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.localStorage.saveData('userData', this.tasks)
    }

  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.localStorage.saveData('userData', this.tasks);
  }

}
