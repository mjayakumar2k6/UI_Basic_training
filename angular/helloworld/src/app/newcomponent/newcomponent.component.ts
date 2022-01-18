import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent implements OnInit {

  myid:string = "myinputid";
  idinput:string = "idinput";
  isdisabled:boolean = false;
  success:string = "success";
  isSuccess: boolean = false;
  isSpecial: boolean = true;
  greet:string = "";
  successClass: string = "success";
  constructor() { }

  ngOnInit(): void {
  }

  logMessage() {
    console.log("Log from angular");
    this.greet = "Welcome to angular training";
  }

  greetWithParams(trainingname:string="ANGULAR") {
    this.greet = `Welcome to ${trainingname} training`
  }

  eventKeyword(event: MouseEvent) {
    console.log(event.target);
    //event.stopPropagation();
    //event.preventDefault();
  }
}
