import {Task} from "./task";

let TASKS:Task[] = [
    {id: 1, name: 'Trabalhar'},
    {id: 2, name: 'Lavar pratos'},
    {id: 3, name: 'Tirar poeira'},
    {id: 4, name: 'Compras no supermercado'},
    {id: 5, name: 'Cuidar das crianças'},
    {id: 6, name: 'Jogar videogame'},
    {id: 7, name: 'Almoçar'},
    {id: 8, name: 'Jantar'},
    {id: 9, name: 'Fazer exercício'},
    {id: 10, name: 'Pagar contas'}
];

export class TaskSevice{

    getTasks():Task[]{
        return TASKS;
    }

    getTask(id:number): Task|null{
        let array = this.getTasks().filter(item => item.id == id);
        return array.length ? array[0] : null;
    }

    createTask(task: Task){
        task.id = this.getTasks().length + 1;
        this.getTasks().push(task);
    }

}