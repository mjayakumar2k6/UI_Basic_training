import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // @Input() trainingFromParent!:String[];
  @Input('trainingFromParent') training!:String[];
  @Output() logEvent = new EventEmitter<any>();

  today: Date = new Date();
  name: string = "welcome to angular training";

  num: number = 1000.554;

  constructor() { 
    console.log("Constructor", "test component");
    
  }

  ngOnInit(): void {
    // let element = document.getElementById("myid");
    console.log("Init", "test component");
  }

  ngAfterViewInit(): void {
    console.log("AferViewInit");
    
  }

  ngOnDestroy(): void {
    console.log("Destroy");
    
  }

  addJquery() {
    this.logEvent.emit("jQuery");    
  }
  

}
