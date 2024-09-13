import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GroceryComponent {
  task: string = '';
  tasks: {name: string}[] = [];

  onClick(){
        this.tasks.push({name: this.task});
        this.task = '';
  
  }
} 
