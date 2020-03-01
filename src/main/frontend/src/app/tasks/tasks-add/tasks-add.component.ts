import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {


    tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {

      this.tasks.push(new Task(1, "Task 1", true, "07/08/17"))
      this.tasks.push(new Task(2, "Task 2", false, "07/08/17"))
      this.tasks.push(new Task(3, "Task 3", false, "07/08/17"))
  }



}
