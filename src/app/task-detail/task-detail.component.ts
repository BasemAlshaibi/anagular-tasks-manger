import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ITask } from '../itask';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  selectedId;
  taskData;

  constructor(
    private tasksSer: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private title:Title
  ) { }

  ngOnInit() {

    this.title.setTitle("تفاصيل المهمة");

    this.route.paramMap.subscribe(p => {let id = Number(p.get('id'));

    this.selectedId = id});

     
        this.taskData = this.tasksSer.TasksArr[this.selectedId];
        this.selectedId ==true;
     
 

  }
  onDelete() {
    this.tasksSer.deleteTask(this.selectedId);
    this.router.navigate(['/']);

  }

  onUpdate() {
    this.tasksSer.onUpdate(this.selectedId, this.taskData);
    this.router.navigate(['/']);

  }

}
