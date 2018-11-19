import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: '.app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = Array<any>();

  constructor(private alunos_service: UsersService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers(){
    this.alunos_service.GetUsers().subscribe(result => this.users = result);
  }
}
