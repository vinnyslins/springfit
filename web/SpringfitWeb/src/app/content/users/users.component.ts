import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService, User } from 'src/app/services/users.service';
import { UserComponent } from './user/user.component';
import { Router } from "@angular/router"
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @ViewChild(UserComponent) userComponent: UserComponent;
  @ViewChild(EditUserComponent) editUserComponent: EditUserComponent;

  SelectedUser: User;
  Users: Array<User>;

  constructor(private userService : UsersService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    if (this.userService.CurrentUser == undefined) {
      this.router.navigate(['/home']);
    }
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(result => this.Users = result);
  }
  
  listUsersChanged(user : User): void{
    if(user == undefined)
    this.SelectedUser = undefined;
    
    this.getUsers();
  }
  
  reciverFeedback(userSelected : User): void {
    this.SelectedUser = userSelected;
  }

  createNewUser(): void{
    this.SelectedUser = new User();
  }

}
