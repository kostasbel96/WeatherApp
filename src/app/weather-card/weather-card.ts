import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-weather-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard{
  @Input()
  weatherData: any;
  image!: string;
  @Input()
  firstTry?: boolean;
  
  ngOnChanges(){
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0){
      this.image = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    }
  }

}
