import {Component} from '@angular/core';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  weather = {
    temperature: 26,
    condition: 'Partly Cloudy',
    location: 'Dhaka, Bangladesh',
    icon: 'wb_cloudy',         // material icon
    stats: [
      {label: 'Humidity', value: '62%'},
      {label: 'Wind', value: '12 km/h'},
      {label: 'UV Index', value: 'Moderate'}
    ]
  };
}
