import { Component } from '@angular/core';
import {Steps} from './steps/steps';

@Component({
  selector: 'app-setup-bar',
  imports: [
    Steps
  ],
  templateUrl: './setup-bar.html',
  styleUrl: './setup-bar.css',
})
export class SetupBar {

}
