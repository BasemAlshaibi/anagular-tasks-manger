import { Injectable } from '@angular/core';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  TasksArr :Array<ITask>=[
    {title :"sleep" , description:"on 8 oclock"},
    {title :"work" , description:"on 9 night"}

  ];

  constructor() { }

  deleteTask(i){

this.TasksArr.splice(i,1);
    
  }

  AddTask(t,d){

    this.TasksArr.push({title :t , description:d});
        
      }

      onUpdate(i,d){
     this.TasksArr[i]=d

      }
}
