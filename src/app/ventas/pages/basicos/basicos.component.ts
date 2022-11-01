import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLowerCase :string = "EMANUEL"
  nombreUpperCase :string = "emanuel"
  nombreTitleCase :string = "emaNaNUEL sUdaNeZ"

  dataPipe: Date = new Date()
}
