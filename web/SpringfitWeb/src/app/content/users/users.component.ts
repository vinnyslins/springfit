import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService, User } from 'src/app/services/users.service';
import { UserComponent } from './user/user.component';
import { Router } from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  @ViewChild(UserComponent) userComponent: UserComponent;

  SelectedUser: User;

  Users: Array<User>;

  constructor(private userService : UsersService, private router: Router) { }

  ngOnInit() {
    this.GetUsers();
    if (this.userService.CurrentUser == undefined) {
      // TODO
      // this.router.navigate(['/home']);
    }
  }

  GetUsers(){
    this.userService.getUsers().subscribe(result => this.Users = result);
  }
  
  reciverFeedback(userSelected) {
    this.SelectedUser = userSelected;
  }

  createNewUser(){
    this.SelectedUser = new User();
  }
}
