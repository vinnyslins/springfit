import { Component, OnInit, Input, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';
import { PermissionsService } from 'src/app/services/permissions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input('user') user : User;
  @Output() usersChanged = new EventEmitter();

  bufferUser: User;

  constructor(private permissionsService: PermissionsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const user: SimpleChange = changes.user;
    
    this.bufferUser = new User();

    if(this.user != undefined)
      this.bufferUser.CopyUser(this.user);
  }

  updateUser(){
    this.usersService.updateUser(this.bufferUser);

    this.feedback();
  }

  deletUser(){
    this.usersService.deletUser(this.bufferUser);

    this.bufferUser = undefined;
    this.feedback();
  }
  
  registerUser(): void{
    this.usersService.addUser(this.bufferUser).subscribe();
    
    this.feedback();
  }

  userChanged() : boolean{
    if(this.user == undefined || this.bufferUser == undefined)
      return false;

    if(this.bufferUser.name != this.user.name)
      return false;
    if(this.bufferUser.email != this.user.email)
      return false;
    if (this.bufferUser.address != this.user.address)
      return false;
    if (this.bufferUser.document != this.user.document)
      return false;
    if (this.bufferUser.birthday != this.user.birthday)
      return false;
    if (this.bufferUser.permission.idPermission != this.user.permission.idPermission)
      return false;
    
    return true;
  }
  
  ableToRegister(): boolean{
    if(this.bufferUser.name != "" && 
    this.bufferUser.permission.idPermission != undefined && 
    this.bufferUser.email != "")
      return false;
    else
      return true;
  }

  feedback() {
    this.usersChanged.emit(this.bufferUser);
  }

}