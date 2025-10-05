import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


const weatherApi = `https://api.openweathermap.org/data/2.5/weather`;
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  http: HttpClient = inject(HttpClient);
  
  getWeatherDataByCityName(city: string): Observable<any>{
    return this.http.get(`${weatherApi}?q=${city}&appid=${environment.weatherApiKey}&units=metric&lang=el`);
  }
}
