import { Component } from '@angular/core';
import { TaskList } from 'src/app/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList:Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]')

  ngDoCheck() {
    this.setLocalStorage()
  }

  public deleteAllTasks(){
    const confirm = window.confirm('Are you sure you want to delete all tasks?')
    if(confirm)
      this.taskList = []
  }

  public setEmitTaskList(event: string){
    this.taskList.push({name:event, checked:false})
  }

  public deleteItem(value: number){
    this.taskList.splice(value, 1)
  }

  public validateInput(event: string, index: number){
    if(!event.length) {
      const confirm = window.confirm('Do you want to delete this task?')
      if(confirm)
        this.deleteItem(index)
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList))
    }
  }

}
