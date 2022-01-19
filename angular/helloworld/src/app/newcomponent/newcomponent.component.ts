import { Component, OnInit } from '@angular/core';

interface Person {
  id: number;
  username: string;
  password: string;
}

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
  name:string = "Welcome";
  successClass: string = "success";

  username:string = "";
  password: string = "";

  userObj: Person = {username: "", password: "", id: 23};

  activeTabIndex: number = 0;

  users: Person[] = [
    {username: "abc", password: "123", id: 123},
    {username: "xyz", password: "456", id: 124},
    {username: "pip", password: "345", id: 125}
  ]

  // user:any = {};


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

  preventLink(event:MouseEvent) {
    event.preventDefault();
  }

  logInputValue(inp: string) {
    console.log(inp);
  }

  doLogin() {
    console.log(this.userObj);
    
  }
}
