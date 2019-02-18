import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   constructor(private http: Http) { }
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/masdelmon/api-cv").
      map((response) ⇒ response.json()).
      subscribe((data) ⇒ console.log(data))
   }
