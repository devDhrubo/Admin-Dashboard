import { Component } from '@angular/core';

interface AgendaItem {
  time: string;
  title: string;
  location?: string;
}


@Component({
  selector: 'app-agenda',
  imports: [],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {

  today = new Date().toISOString().slice(0, 10);

  agendaItems: AgendaItem[] = [
    {
      time: '09:00 AM',
      title: 'Daily stand-up with team',
      location: 'Meeting Room 1'
    },
    {
      time: '11:30 AM',
      title: 'Client sync – Project Aurora',
      location: 'Zoom'
    },
    {
      time: '02:00 PM',
      title: 'Design review session',
      location: 'Meeting Room 3'
    },
    {
      time: '04:30 PM',
      title: 'Email follow-ups & planning',
      location: 'Workspace'
    }
  ];
}
