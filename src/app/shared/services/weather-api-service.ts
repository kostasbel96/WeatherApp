import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const weatherApi = `https://api.openweathermap.org/data/2.5/weather`;

/**
 * A service that interacts with the OpenWeatherMap API
 * to fetch weather data based on a given city name.
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  /**
   * The HTTP client used to perform API requests.
   */
  http: HttpClient = inject(HttpClient);

  /**
   * Fetches current weather data for a specific city
   * using the OpenWeatherMap API.
   *
   * @param city - The name of the city to retrieve weather data for.
   * @returns An Observable containing the weather data response from the API.
   *
   * @example
   * ```ts
   * this.weatherApiService.getWeatherDataByCityName('Athens')
   *   .subscribe(data => console.log(data));
   * ```
   */
  getWeatherDataByCityName(city: string): Observable<any> {
    return this.http.get(
      `${weatherApi}?q=${city}&appid=${environment.weatherApiKey}&units=metric&lang=en`
    );
  }
}
