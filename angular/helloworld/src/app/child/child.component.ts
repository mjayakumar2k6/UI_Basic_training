import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  users:any = [];
  constructor(private uS: UserService) { }

  ngOnInit(): void {
    this.uS.getUsers().subscribe((user: any) => {
      this.users = user.data;
    });
  }

}
