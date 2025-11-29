import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  imports: [NgClass],
  templateUrl: './nav-button.html',
  styleUrl: './nav-button.css',
})
export class NavButton {
  @Input() icon: string = '';
  @Input() colorClass = 'text-slate-600';
}
