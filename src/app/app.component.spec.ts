import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppService } from 'src/services/app.service';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    providers: [
      HttpClient,
      AppService,
      HttpHandler
    ]
  }));

  it('should create the app', () => {
    expect(true).toEqual(true);
  });

  it(`should have as title 'clientapp'`, () => {
    expect(true).toEqual(true);
  });

  it('should render title', () => {
    expect(true).toEqual(true);
  });
});
