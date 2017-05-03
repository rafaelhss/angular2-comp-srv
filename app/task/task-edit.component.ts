import {Component, OnInit} from "@angular/core";
import {Task} from "./task";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TaskSevice} from "./task.service";

declare var module: any;

@Component({
    selector: 'task-edit',
    templateUrl: 'task-edit.component.html',
    moduleId: module.id
})
export class TaskEditComponent implements OnInit{
    task: Task;

    constructor(
        private taskService: TaskSevice,
        private route: ActivatedRoute,
        private router: Router) {}

    submit(){
        this.router.navigate(['tasks','list']);
    }

    ngOnInit(): void{
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.task = this.taskService.getTask(id);
            if (!this.task) {
                alert('Task dont exist');
            }
        });
    }
}