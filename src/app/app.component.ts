import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  callApi() {
    this.http.get('http://slowwly.robertomurray.co.uk/delay/4000/url/https://jsonplaceholder.typicode.com/comments').pipe(delay(5000)).subscribe();
  }
}
