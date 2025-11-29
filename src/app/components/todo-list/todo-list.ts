import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  tasks = [
    { title: 'Finish UI wireframe', completed: true },
    { title: 'Prepare weekly report', completed: false },
    { title: 'Update project files', completed: true },
    { title: 'Email client update', completed: false },
    { title: 'Team stand-up meeting', completed: true }
  ];
}
