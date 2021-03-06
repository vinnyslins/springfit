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

  getTrains(): Promise<any> {
    return this.http.get(`${this.apiUrl}/trains`).toPromise();
  }

  createPractice(payload: any): Promise<any> {
    return this.http.post(`${this.apiUrl}/practice`, payload).toPromise();
  }

  getPratices(): Promise<any> {
    return this.http.get(`${this.apiUrl}/practices`).toPromise();
  }

  savePractice(payload: any): Promise<any> {
    return this.http.put(`${this.apiUrl}/practice`, payload).toPromise();
  }

  deletePractices(id: number): Promise<any> {
    return this.http.delete(`${this.apiUrl}/practice/${id}`).toPromise();
  }

  getExercises(): Promise<any> {
    return this.http.get(`${this.apiUrl}/exercises`).toPromise();
  }
}
