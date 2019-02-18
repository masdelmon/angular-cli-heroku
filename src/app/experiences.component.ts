import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})

export class ExperiencesComponent {
   constructor(private http: HttpClient) { }
   experiences;
   section = "Work experiences";
  
   ngOnInit() 
   {
     /*
      this.http.get("http://jsonplaceholder.typicode.com/users").map((response) ⇒ response.json()).subscribe((data) ⇒ {this.displaydata(data);})
      */
      this.http.get('https://my-json-server.typicode.com/masdelmon/api-cv/experiences').subscribe(data => {this.displaydata(data);})
 
   }
   displaydata(data) {this.experiences = data;}
}
