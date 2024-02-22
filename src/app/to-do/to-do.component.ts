import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from './task.interface';
import { TodoService } from './services/todo.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {

  ngOnInit(): void {
      
  }

  // tasks: Task[] = [];
  // newTask: string = '';

  // constructor(private localstorage: TodoService) { }

  // ngOnInit(): void {

  //   const dataRetrive = this.localstorage.getData('userData');
  //   if (dataRetrive) {
  //     this.tasks = dataRetrive;
  //   }

  // }

  // addTask() {
  //   if (this.newTask.trim() !== '') {
  //     const newTask: Task = {
  //       name: this.newTask,
  //       completed: false
  //     };
  //     this.tasks.push(newTask);

  //     this.localstorage.saveData('userData', this.tasks);

  //     this.newTask = '';
  //   }
  // }

  // removeTask(task: Task) {
  //   const taskIndex = this.tasks.indexOf(task);
  //   if (taskIndex !== -1) {
  //     this.tasks.splice(taskIndex, 1);
  //     this.localstorage.saveData('userData', this.tasks)
  //   }

  // }

  // toggleCompleted(task: Task) {
  //   task.completed = !task.completed;
  //   this.localstorage.saveData('userData', this.tasks);
  // }

}
