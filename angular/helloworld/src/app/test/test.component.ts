import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

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

  users: any = [];
  loading:boolean = true;
  error: string = "";
  constructor(
    private userService: UserService
  ) { 
    console.log("Constructor", "test component");
    
  }

  ngOnInit(): void {
    // let element = document.getElementById("myid");
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      this.error = data.statusText;
      this.loading = false;
    },()=>{
      this.loading = false;
    });
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
