import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: "{{title}}",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!!!';
  name:string = "Jayakumar";
  show:boolean = false;
  url:string =  window.location.href;
  training:Array<string> = ["Angular", "Typescript", "JS"];


  greet(n:string = "JS") {
    return "Hello " + n;
  }


}
