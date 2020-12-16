import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../classes/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() OnRemove: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    this.OnRemove.emit(this.task);
  }
}
