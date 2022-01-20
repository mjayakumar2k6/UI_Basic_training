import { Component } from '@angular/core';


@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  // template: "{{title}}",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!!!';
  name:string = "Jayakumar";
  show:boolean = false;
  showelem:boolean = true;
  url:string =  window.location.href;
  training:Array<string> = ["Angular", "Typescript", "JS"];
  toggle: boolean = false;
  tName: string = "";

  greet(n:string = "JS") {
    //console.log(this);
    this.logMyName();
    setTimeout(() => {
      this.showelem = false;
    }, 3000);

    return "Hello " + this.name;


  }

  logMyName() {
    //console.log("Hi"); 
  }

  parentChild(tName: string) {
    this.toggle = !this.toggle;
    this.tName = tName;
    // this.training.push(tName);
    // console.log("Parent event", tName, this.training);

   
  }

}
