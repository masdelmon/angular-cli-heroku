import { Component } from '@angular/core';
import { Http } from '@angular/http';

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
      this.http.get("").
      map(
         (response) ⇒ response.json()
      ).
      subscribe(
         (data) ⇒ {this.displaydata(data);}
      )
   }
   displaydata(data) {this.experiences = data;}
}
