import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Permission } from './permissions.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  usersHttpURL: string = 'https://springfit.herokuapp.com/api/users/'

  UsersHttpURL: string = 'https://springfit.herokuapp.com/api/user/'

  CurrentUser : User;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.usersHttpURL}`);
  }


  login(email : string, password : string){
    // TODO
    // (this.http.get<User>(`${this.UsersHttpURL + '1'}`)).toPromise().then( 
    //   result => {
    //     this.CurrentUser = result;
    // }).catch(erro => alert(erro.status));

    this.CurrentUser = new User();
    this.CurrentUser.name = "Marcos";
    this.CurrentUser.userId = 1;
    this.CurrentUser.permission.idPermission = 5;
    this.CurrentUser.permission.description = "admin";

    this.CurrentUser.name = "Marcos";
    this.CurrentUser.name = "Marcos";
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

  CopyUser(toCopy : User){
    this.name = toCopy.name;
    this.email = toCopy.email;
    this.address = toCopy.address;
    this.document = toCopy.document;
    this.password = toCopy.password;
    this.userId = toCopy.userId;
    this.Status = toCopy.Status;
    this.permission = toCopy.permission;
    this.birthday = toCopy.birthday;
  }
}