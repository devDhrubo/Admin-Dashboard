import { Component } from '@angular/core';
import {NavButton} from '../sidebar/nav-button/nav-button';

@Component({
  selector: 'app-header',
  imports: [
    NavButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
