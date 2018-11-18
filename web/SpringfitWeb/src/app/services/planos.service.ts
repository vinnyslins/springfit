import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PlanosService {

  httpURL: string = 'http://5bd683baa6871d0013323384.mockapi.io/Plano'

  constructor(private http: HttpClient) { }

  GetPlanos(){
    return this.http.get<Plano[]>(`${this.httpURL}`);
  }
}

export class Plano{
  
  constructor() {  }

  id : number;
  Descricao : string;
  Preco : number;
  Beneficios : string[];
}
