import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Permission } from './permissions.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  usersHttpURL: string = 'https://springfit.herokuapp.com/api/users/';

  userHttpURL: string = 'https://springfit.herokuapp.com/api/user/';

  loginHttpURL: string = 'https://springfit.herokuapp.com/api/login/';

  CurrentUser : User;

  constructor(private http: HttpClient) { 
    // TODO
    var token = sessionStorage.getItem('SpringFitToken');
    
    if(token != undefined){
      console.log(token);
      alert(token.toString());
      this.CurrentUser = this.getUser(parseInt(token));
    }
  }

  getUser(id : number): User {
    return this.http.get<User[]>(`${this.userHttpURL}` + id).subscribe()[0];
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersHttpURL}`);
  }

  addUser(new_user : User): Observable<any> {
    return this.http.post(`${this.userHttpURL}`, new_user);
  }

  login(userlogin: { "email", "password"}, remember: boolean): void{
    console.log(userlogin);

    (this.http.post(`${this.loginHttpURL}`, userlogin)).subscribe(
      result => {
        console.log(result);
        this.CurrentUser = result as User;
        if(remember)
          sessionStorage.setItem('SpringFitToken', this.CurrentUser.userId.toString());
    });
  }
}

export class User{

  constructor() {
    this.name = "";
    this.email = "";
    this.address = "";
    this.document = "";
    this.password = "";

    this.permission = new Permission();
  }

  name: string;
  email: string;
  address: string;
  document: string;
  password: string;
  userId: number;
  Status: number;
  permission: Permission;
  birthday: Date;

  CopyUser(toCopy : User): void{
    this.name = toCopy.name;
    this.email = toCopy.email;
    this.address = toCopy.address;
    this.document = toCopy.document;
    this.password = toCopy.password;
    this.userId = toCopy.userId;
    this.Status = toCopy.Status;
    this.permission.idPermission = toCopy.permission.idPermission;
    this.permission.description = toCopy.permission.description;
    this.birthday = toCopy.birthday;
  }
}