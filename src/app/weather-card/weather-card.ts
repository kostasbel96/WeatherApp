import { Component, Input, OnChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DecimalPipe } from '@angular/common';
import { NotFoundComponent } from '../not-found-component/not-found-component';
import { WelcomeComponent } from '../welcome-component/welcome-component';

/**
 * A component that displays detailed weather information for a given city.
 * 
 * Depending on the provided data, it renders a weather card with temperature,
 * description, and an icon. If the data is not available, it may show
 * a "Not Found" or "Welcome" component instead.
 */
@Component({
  selector: 'app-weather-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    DecimalPipe,
    NotFoundComponent,
    WelcomeComponent
  ],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard implements OnChanges {
  /**
   * Weather data object received from the API, containing information
   * such as temperature, humidity, and weather conditions.
   */
  @Input()
  weatherData: any;

  /**
   * Indicates whether this is the first attempt to fetch weather data.
   * Used to determine whether to show the welcome or error components.
   */
  @Input()
  firstTry?: boolean;

  /**
   * The name of the city for which weather data is displayed.
   */
  @Input()
  city?: string;

  /**
   * The URL of the weather icon retrieved from the OpenWeatherMap API.
   */
  image!: string;

  /**
   * Controls whether the weather card's entrance animation is triggered.
   */
  animationTrigger = false;

  /**
   * Determines whether the weather card should be displayed.
   */
  showCard = false;

  /**
   * Lifecycle hook that responds to input property changes.
   * 
   * When new weather data is received, it updates the weather icon
   * and triggers the display and animation of the weather card.
   */
  ngOnChanges(): void {
    console.log(this.weatherData);
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
      this.image = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
      this.showCard = false;
      this.animationTrigger = false;
      setTimeout(() => {
        this.showCard = true;
        this.animationTrigger = true;
      }, 50);
    }
  }
}
