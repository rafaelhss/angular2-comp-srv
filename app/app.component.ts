import {Component} from '@angular/core';

//essa declaracao foi implementada somente para nao ficar dando erro, porque nao influi em nada, afinal a variavel module e global, vem do arquivo tsconfig.json
declare var module: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})

export class AppComponent{

}