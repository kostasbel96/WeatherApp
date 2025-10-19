import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DecimalPipe } from '@angular/common';
import { NotFoundComponent } from '../not-found-component/not-found-component';
import { WelcomeComponent } from '../welcome-component/welcome-component';

@Component({
  selector: 'app-weather-card',
  imports: [MatButtonModule, MatCardModule, DecimalPipe, NotFoundComponent, WelcomeComponent],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard{
  @Input()
  weatherData: any;
  @Input()
  firstTry?: boolean;
  @Input()
  city?: string
  
  image!: string;
  animationTrigger = false;
  showCard = false;

  ngOnChanges(){
    console.log(this.weatherData);
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0){
      this.image = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
      this.showCard = false;
      this.animationTrigger = false;
      setTimeout(() => {
        this.showCard = true;
        this.animationTrigger = true;
      }, 50);
    }

   
    
  }

}
