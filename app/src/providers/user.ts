import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  private apiUrl = 'http://springfit.herokuapp.com/api';
  public user: any;

  constructor(public http: HttpClient) {
  }

  login(): Promise<any> {
    const promise = this.http.get(`${this.apiUrl}/user/14`).toPromise().then(response => {
      this.user = response;
    });
    return promise;
  }
}
