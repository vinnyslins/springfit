import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';
import { PermissionsService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input('user') user : User;

  bufferUser: User;

  constructor(private permissionsService : PermissionsService, private usersService : UsersService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const user: SimpleChange = changes.user;
    
    this.bufferUser = new User();

    if(this.user != undefined)
      this.bufferUser.CopyUser(this.user);
  }

  updateUser(){
    // TODO
  }

  userChanged() : boolean{
    if(this.user == undefined || this.bufferUser == undefined)
      return false;

    if(this.bufferUser.name != this.user.name)
      return false;
    if(this.bufferUser.email != this.user.email)
      return false;
    if (this.bufferUser.permission.idPermission != this.user.permission.idPermission)
      return false;
    
    return true;
  }

  registerUser(): void{
    var response : any;
    this.usersService.addUser(this.bufferUser).subscribe(result => response = result);
    console.log(response);
  }

  ableToRegister(): boolean{
    if(this.bufferUser.name != "" && 
    this.bufferUser.permission.idPermission != undefined && 
    this.bufferUser.email != "")
      return false;
    else
      return true;
  }

  dateInput(event){
    this.bufferUser.birthday = new Date(event.target.value);
  }

  teste(){
    console.log(this.bufferUser);
  }
}
