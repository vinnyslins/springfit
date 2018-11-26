import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PlansService {

  httpURL: string = 'http://5bd683baa6871d0013323384.mockapi.io/Plano'

  constructor(private http: HttpClient) { }

  GetPlans(){
    return this.http.get<Plan[]>(`${this.httpURL}`);
  }
}

export class Plan{
  
  constructor() {  }

  id : number;
  Descricao : string;
  Preco : number;
  Beneficios : string[];
}
