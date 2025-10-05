import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherApiService } from './shared/services/weather-api-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('weather-app');

  constructor(private weatherService: WeatherApiService){

  }
   

  ngOnInit(){
    this.weatherService
    .getWeatherDataByCityName("Athens")
    .subscribe(data => console.log(data));
  }

}
