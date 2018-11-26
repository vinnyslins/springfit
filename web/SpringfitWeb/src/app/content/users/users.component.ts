import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  SelectedUser : any;

  Users : Array<any>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers(){
    this.usersService.GetUsers().subscribe(result => this.Users = result);
  }
}
