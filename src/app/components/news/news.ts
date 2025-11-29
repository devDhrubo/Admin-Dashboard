import { Component } from '@angular/core';

interface NewsItem {
  title: string;
  source: string;
  time: string;
}


@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  news: NewsItem[] = [
    {
      title: 'New workspace features are now live for all teams.',
      source: 'Product Updates',
      time: '10 min ago'
    },
    {
      title: 'Weekly performance report is ready to review.',
      source: 'Analytics',
      time: '1 hour ago'
    },
    {
      title: 'Security policy has been updated for all accounts.',
      source: 'Security',
      time: 'Yesterday'
    }
  ];
}
