import { Component, OnInit } from '@angular/core';
import { Task } from './classes/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: Task[];
  addTaskValue: string;
  addDesc: string;

  constructor() {
    this.tasks = [];
    this.tasks.push(
      {
        name: 'Commit suicide',
        description: 'go committed suicide bro!',
      },
      {
        name: 'finish your homework',
        description: 'dont be lazy',
      },
      {
        name: 'debug',
        description: 'dont even think about it',
      },
      {
        name: 'debug',
        description: 'about it',
      },
      {
        name: 'go home',
        description: 'my headache so bad',
      }
    );
  }

  ngOnInit(): void {
    console.log(this.tasks);
  }

  addTask(): void {
    this.tasks.push({
      name: this.addTaskValue,
      description: this.addDesc,
    });
  }

  removeTask(task: any): void {
    const removeindex = this.tasks.indexOf(task);
    console.log(removeindex);
    this.tasks.splice(removeindex, 1);
  }
}
