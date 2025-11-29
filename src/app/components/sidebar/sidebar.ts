import { Component } from '@angular/core';
import {NavButton} from './nav-button/nav-button'
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-sidebar',
  imports: [NavButton, MatCardModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
