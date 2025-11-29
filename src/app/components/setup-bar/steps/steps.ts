import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-steps',
  imports: [NgClass],
  templateUrl: './steps.html',
  styleUrl: './steps.css',
})
export class Steps {
  @Input() title: string="";
  @Input() icon: string="";
}
