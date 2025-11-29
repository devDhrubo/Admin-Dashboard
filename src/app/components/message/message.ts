import {Component} from '@angular/core';

interface MessageItem {
  user: string;
  avatar: string; // initials or emoji
  text: string;
  time: string;
}

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  messages: MessageItem[] = [
    {
      user: 'Ayesha',
      avatar: 'A',
      text: 'Meeting rescheduled to 3:00pm.',
      time: '2m ago'
    },
    {
      user: 'Jamil',
      avatar: 'J',
      text: 'Please check the new design updates.',
      time: '15m ago'
    },
    {
      user: 'Sarah',
      avatar: 'S',
      text: 'The client confirmed the changes.',
      time: '1h ago'
    }
  ];
}
