import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 2';
  city = 'Kansas City';
  data: any;
  currentUrl = 'https://api.openweathermap.org/data/2.5/weather';
  hourlyUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  isCurrent = true;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCurrentWeather() {
    this.data = null
    this.httpClient.get(this.currentUrl, {params: {
        q: this.city,
        appid: '9fbf36dac24bc96ff5bf83a41bfea5b0'
      }
    }).subscribe(data => {
      this.data = data;
      this.isCurrent = true;
      console.log(data);
    });
  }

  getHourlyWeather() {
    this.data = null
    this.httpClient.get(this.hourlyUrl, {params: {
        q: this.city,
        appid: '9fbf36dac24bc96ff5bf83a41bfea5b0'
      }
    }).subscribe(data => {
      this.data = data;
      this.isCurrent = false;
      console.log(data);
    });
  }
}
