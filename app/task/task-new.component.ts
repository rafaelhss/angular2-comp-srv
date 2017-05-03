import {Component} from "@angular/core";
import {Task} from "./task";
import {Router} from "@angular/router";
import {TaskSevice} from "./task.service";

declare var module: any;

@Component({
    selector: 'task-new',
    templateUrl: 'task-new.component.html',
    moduleId: module.id
})
export class TaskNewComponent{
    task: Task = {
        id: 0,
        name: ''
    };

    constructor(
        private taskService: TaskSevice,
        private router: Router) {}

    submit(){
        this.taskService.createTask(this.task);
        this.router.navigate(['tasks','list']);
    }
}