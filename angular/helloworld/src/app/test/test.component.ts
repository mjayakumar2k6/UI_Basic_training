import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

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

}
