import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user') user : any;
  @Input('selectedUser') selectedUser : any;

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
