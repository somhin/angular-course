import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input()
  tasks = ['Coffee', 'Breakfast'];
  task: string;

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    this.tasks.push(this.task);
    this.task = '';
  }

  deleteTask(task: string): void {
    this.tasks = this.tasks.filter((item) => item !== task);
  }
}
