import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(UserComponent) userComponent: UserComponent;

  SelectedUser : any;

  Users : Array<any>;

  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers(){
    this.userService.GetUsers().subscribe(result => this.Users = result);
  }
  
  reciverFeedback(userSelected) {
    this.SelectedUser = userSelected;
  }
}
