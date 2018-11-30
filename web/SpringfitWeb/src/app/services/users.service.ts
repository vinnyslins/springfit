import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpURL: string = 'http://5bd683baa6871d0013323384.mockapi.io/Aluno/'

  CurrentUser : any;

  constructor(private http: HttpClient) { }

  GetUsers() {
    return this.http.get<any[]>(`${this.httpURL}`);
  }

  Login(email : string, password : string){
    (this.http.get<any>(`${this.httpURL + '1'}`)).toPromise().then( 
      result => {
        this.CurrentUser = result;
    }).catch(erro => alert(erro.status));
  }
}