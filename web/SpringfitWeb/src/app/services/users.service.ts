import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  httpURL: string = 'http://5bd683baa6871d0013323384.mockapi.io/Aluno'

  constructor(private http: HttpClient) { }

  GetUsers() {
    return this.http.get<any[]>(`${this.httpURL}`);
  }
}