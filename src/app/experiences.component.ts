import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})

export class ExperiencesComponent {
   section = "Work experiences";
   experiences;
  
  constructor(private http: Http) { }
  
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/masdelmon/api-cv").
      map(
         (response) ⇒ response.json()
      ).
      subscribe(
         (data) ⇒ {this.displaydata(data);}
      )
   }
   displaydata(data) {this.experiences = data;}
}
