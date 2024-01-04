import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { WeatherForecast } from './WeatherForecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public columns = [
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: WeatherForecast) => `${element.date}`,
    },
    {
      columnDef: 'temperatureC',
      header: 'Temperature C',
      cell: (element: WeatherForecast) => `${element.temperatureC}`,
    },
    {
      columnDef: 'temperatureF',
      header: 'Temperature F',
      cell: (element: WeatherForecast) => `${element.temperatureF}`,
    },
    {
      columnDef: 'summary',
      header: 'Summary',
      cell: (element: WeatherForecast) => `${element.summary}`,
    },
  ];

  public dataSource: WeatherForecast[] = [];
  public displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private service: AppService) {
  }

  public ngOnInit(): void {
    this.refresData();
  }

  public refresData() {
    this.service.GetWeatherForecastData().subscribe(
      (res) => {
        console.log(res);
        this.dataSource = res;
      }
    );
  }
}
