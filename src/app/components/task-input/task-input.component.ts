import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addTaskIntoList: string = '';

  public submitItemTaskList(){
    this.addTaskIntoList = this.addTaskIntoList.trim()

    if(this.addTaskIntoList)
      this.emitItemTaskList.emit(this.addTaskIntoList)
      this.addTaskIntoList = ''
  }

}
