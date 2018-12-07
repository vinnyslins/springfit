import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PermissionsService {

  Permissions : Array<Permission>;

  httpURL: string = 'https://springfit.herokuapp.com/api/Permissions'

  constructor(private http: HttpClient) { 
    this.getPermissions().subscribe(result => this.Permissions = result);
  }

  ngOnInit(){
    
  }

  getPermissions() {
    return this.http.get<Permission[]>(`${this.httpURL}`);
  }
}

export class Permission{
  constructor() {
    this.description = "";
  }

  idPermission : number;
  description : string;
}