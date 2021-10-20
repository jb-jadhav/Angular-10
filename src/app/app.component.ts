import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  
  students: Student[] = [
    {id: 1, name: "Hardik"},
    {id: 2, name: "Paresh"},
    {id: 3, name: "Rakesh"},
  ]

}
