import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainProvider {
  private apiUrl = 'http://springfit.herokuapp.com/api';

  constructor(public http: HttpClient) {
  }

  createTrain(payload: any): Promise<any> {
    return this.http.post(`${this.apiUrl}/train`, payload).toPromise();
  }
}
