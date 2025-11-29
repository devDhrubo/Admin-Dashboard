import {Component} from '@angular/core';

interface BirthdayItem {
  name: string;
  role: string;
  dayText: string;   // e.g. "Today", "Tomorrow", "In 3 days"
}

@Component({
  selector: 'app-birthday',
  imports: [],
  templateUrl: './birthday.html',
  styleUrl: './birthday.css',
})
export class Birthday {
  birthdays: BirthdayItem[] = [
    {
      name: 'Dolan Dhrubo',
      role: 'Frontend Developer',
      dayText: 'Today'
    },
    {
      name: 'Ayesha Rahman',
      role: 'Product Designer',
      dayText: 'Today'
    },
    {
      name: 'Jamil Hossain',
      role: 'Frontend Developer',
      dayText: 'Tomorrow'
    },
    {
      name: 'Sarah Ahmed',
      role: 'Project Manager',
      dayText: 'In 3 days'
    }
  ];
}
