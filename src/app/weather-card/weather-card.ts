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

}
