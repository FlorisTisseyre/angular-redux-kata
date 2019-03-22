import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  model = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  constructor() { }

  ngOnInit() {
  }

  obSubmit() {
    // TODO : kata
  }

  toggleTodo(todo) {
    // TODO : kata
  }

  removeTodo(todo) {
    // TODO : kata
  }
}
