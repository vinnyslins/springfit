import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../comum-management/user.component.scss']
})

export class UserComponent implements OnInit {

  @Input('user') user : User;
  @Input('selectedUser') selectedUser: User;

  @Output() selectUser = new EventEmitter();

  constructor() {
  }

  OnSelect(){
    this.feedback();
  }

  ngOnInit() {
  }

  feedback() {
    this.selectUser.emit(this.user);
  }
}
