import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private tasksSer:TasksService,
    private router:Router) { }

  ngOnInit() {
  }

  onSave(title,desc){
this.tasksSer.AddTask(title,desc);
this.router.navigate(['/']);
  }

}
