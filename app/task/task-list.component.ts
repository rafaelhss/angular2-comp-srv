import {Component, OnInit} from '@angular/core';
import {Task} from "./task";
import {TaskSevice} from "./task.service";
import {Router} from "@angular/router";

declare var module: any;

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    moduleId: module.id
})

export class TaskListComponent implements OnInit{
    tasks:Task[];
    selectedTask:Task;

    constructor(private taskService:TaskSevice, private router: Router){}

    goToEdit(id: number){
        this.router.navigate(['tasks', id, 'edit']);
    }

    deleteTask(id: number){
        let index = this.tasks.findIndex(item => item.id == id);
        if(index != -1){
            this.tasks.splice(index, 1);
        }
    }

    ngOnInit(): void{
        this.tasks = this.taskService.getTasks();
    }
}