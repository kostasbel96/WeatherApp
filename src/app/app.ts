import { Component, OnInit, signal } from '@angular/core';
import { WeatherApiService } from './shared/services/weather-api-service';
import { Search } from './search/search';
import { WeatherCard } from "./weather-card/weather-card";

@Component({
  selector: 'app-root',
  imports: [Search, WeatherCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Weather Application');
  data: any;


  constructor(private weatherService: WeatherApiService){

  }
   
  onSearch(city: string){
    this.weatherService
      .getWeatherDataByCityName(city)
      .subscribe(data => this.data = data);
      console.log(this.data)
  }

}
