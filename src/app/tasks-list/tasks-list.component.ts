import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private taskSer:TasksService) { }

  tasks=[];

  ngOnInit() {
    this.tasks=this.taskSer.TasksArr;
   }
   
   ondelete(i){
   this.taskSer.deleteTask(i);
    
   }

}
