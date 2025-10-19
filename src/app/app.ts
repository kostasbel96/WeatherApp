import { Component, signal } from '@angular/core';
import { WeatherApiService } from './shared/services/weather-api-service';
import { Search } from './search/search';
import { WeatherCard } from "./weather-card/weather-card";

/**
 * The root component of the Weather Application.
 * 
 * It coordinates user interactions, handles city search events,
 * retrieves weather data from the `WeatherApiService`, and passes
 * the results to child components for display.
 */
@Component({
  selector: 'app-root',
  imports: [Search, WeatherCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * The application title signal.
   * This is a reactive signal that can be used directly in the template.
   */
  protected readonly title = signal('Weather Application');

  /**
   * Stores the weather data returned by the API for the selected city.
   */
  data: any;

  /**
   * Indicates whether the user has performed their first search.
   * Used to control conditional UI rendering (e.g., showing welcome messages).
   */
  first = true;

  /**
   * The name of the city entered by the user in the search bar.
   */
  city?: string;

  /**
   * Creates an instance of the App component and injects the weather API service.
   * 
   * @param weatherService - Service used to fetch weather data from the API.
   */
  constructor(private weatherService: WeatherApiService) {}

  /**
   * Handles the search event emitted by the Search component.
   * 
   * Fetches weather data for the given city and updates component state.
   * If an error occurs (e.g., city not found), it resets the data to `undefined`.
   *
   * @param city - The name of the city to search for.
   */
  onSearch(city: string): void {
    this.city = city;
    this.weatherService
      .getWeatherDataByCityName(city)
      .subscribe({
        next: data => this.data = data,
        error: () => this.data = undefined
      });
    this.first = false;
  }
}
