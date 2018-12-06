import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  private apiUrl = 'http://springfit.herokuapp.com/api';
  public user: any;

  constructor(public http: HttpClient) {
  }

  login(payload: any): Promise<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, payload).toPromise();
  }

  async getUser(id: string): Promise<any> {
    const response = await this.http.get(`${this.apiUrl}/user/${id}`).toPromise();
    this.user = response;
  }

  saveUser(): Promise<any> {
    return this.http.put(`${this.apiUrl}/user`, this.user).toPromise();
  }

  getUsers(): Promise<any> {
    return this.http.get(`${this.apiUrl}/users`).toPromise();
  }
}
