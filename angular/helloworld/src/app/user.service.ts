import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:any = [
    {name:"Jayakumar", department: "Development"},
    {name:"Neeru", department: "Development1"},
    {name:"Jac", department: "Development2"},
    {name:"Hemitha", department: "Development1"},
    {name:"Ramya", department: "Development2"},
    {name:"User1", department: "Development2"},
    {name:"User 2", department: "Development3"},
  ];

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    
    return this.http.get("https://gorest.co.in/public/v1/users").pipe(
      catchError(this.handleError)
    )
    ;
  }

  handleError(err: any) {
    console.log(err);
    return of(err);
  }


}
//https://gorest.co.in/public/v1/users