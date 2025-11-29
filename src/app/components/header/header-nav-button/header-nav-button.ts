import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header-nav-button',
  imports: [NgClass],
  templateUrl: './header-nav-button.html',
  styleUrl: './header-nav-button.css',
})
export class HeaderNavButton {
  @Input() icon: string = '';
  @Input() colorClass = 'text-slate-600';
}
