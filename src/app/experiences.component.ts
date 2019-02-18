import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})

export class ExperiencesComponent {
   constructor(private http: HttpClient) { }
   exp;
   ngOnInit() 
   {
      this.http.get("http://jsonplaceholder.typicode.com/users").map((response) ⇒ response.json()).subscribe((data) ⇒ {this.displaydata(data);})
   }
   displaydata(data) {this.exp = data;}
}
