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
    var token = sessionStorage.getItem('SpringFitToken');

    if(token != undefined){
      this.getUser(parseInt(token)).toPromise().then(
        result => {
          if(result == null)
            sessionStorage.removeItem('SpringFitToken');
          else
            this.CurrentUser = result;
        }
      );
    }
  }

  getUser(user_id : number): Observable<User> {
    return this.http.get<User>(`${this.userHttpURL}` + user_id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersHttpURL}`);
  }

  addUser(new_user : User): Observable<any> {
    return this.http.post(`${this.userHttpURL}`, new_user);
  }

  deletUser(deleted_user: User): boolean{
    deleted_user.Delet();

    return this.updateUser(deleted_user);
  }
  
  updateUser(updated_user: User): boolean{
    var valid: boolean = false;
    
    if(updated_user.userId == undefined)
      return valid;

    this.http.put(`${this.userHttpURL}`, updated_user).toPromise().then(
      result => {
        valid = (result != null);
      }
    );

    return valid;
  }

  login(userlogin: { "email", "password"}, remember: boolean): boolean{
    var valid: boolean;

    (this.http.post(`${this.loginHttpURL}`, userlogin)).toPromise().then(
      result => {
        if(result == null)
          return valid = false;
        else{
          this.CurrentUser = result as User;
          if(remember)
            sessionStorage.setItem('SpringFitToken', this.CurrentUser.userId.toString());
          return  valid =true;
        }
    }).catch(function(error){
      alert(error);
    });

    return valid;
  }

  logout(): void{
    this.CurrentUser = undefined;
    sessionStorage.removeItem('SpringFitToken');
  }

  currentUserAdmin(): boolean {
    if (this.CurrentUser != undefined)
      return this.CurrentUser.permission.idPermission == 5;
    else
      return false;
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
  status: string;
  permission: Permission;
  birthday: string;

  CopyUser(toCopy : User): void{
    this.name = toCopy.name;
    this.email = toCopy.email;
    this.address = toCopy.address;
    this.document = toCopy.document;
    this.password = toCopy.password;
    this.userId = toCopy.userId;
    this.status = toCopy.status;
    this.permission.idPermission = toCopy.permission.idPermission;
    this.permission.description = toCopy.permission.description;
    this.birthday = toCopy.birthday;
  }

  Delet(): void{
    this.status = "off";
  }
}