import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../app/WeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  public GetWeatherForecastData(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>("http://localhost:5000/weatherforecast");
  }
}

