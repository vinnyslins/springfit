import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  private apiUrl = 'http://springfit.herokuapp.com/api';
  public user: any;

  constructor(public http: HttpClient) {
    const id = localStorage.getItem('id');
    if (id) this.getUser(id);
  }

  login(payload: any): Promise<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, payload).toPromise();
  }

  getUser(id: string): void {
    this.http.get(`${this.apiUrl}/user/${id}`).toPromise().then(response => {
      delete response.password;
      this.user = response;
    });
  }
}
