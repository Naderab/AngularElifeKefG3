import { Component, OnInit } from '@angular/core';
import { CalculService } from 'src/app/services/calcul.service';
import { todo } from '../../core/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:todo[] = [];
  message:string='';
  constructor(private calcul:CalculService) { }

  ngOnInit(): void {
    this.todos=[
      {"userId": 1, "id": 1, "title": "delectus aut autem",
      "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
      
  }
  bilan(){
     this.message = this.calcul.getNumberOf(this.todos,'completed',false)+'';
  }
  getById(){
    this.message = this.calcul.getNumberOf(this.todos,'userId',1)+'';
  }

}
