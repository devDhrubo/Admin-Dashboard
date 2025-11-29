import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sidebar} from './components/sidebar/sidebar';
import {Header} from './components/header/header';
import {SetupBar} from './components/setup-bar/setup-bar';
import {TodoList} from './components/todo-list/todo-list';
import {Agenda} from './components/agenda/agenda';
import {Weather} from './components/weather/weather';
import {Message} from './components/message/message';
import {News} from './components/news/news';
import {Birthday} from './components/birthday/birthday';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, Sidebar, Header, SetupBar, TodoList, Agenda, Weather, Message, News, Birthday],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adminDashboard');
}
