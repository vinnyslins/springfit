import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input('user') user : any;

  bufferUser : any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    const user: SimpleChange = changes.user;
    this.bufferUser = this.user;
  }

  updateUser(){
    console.log(this.bufferUser);
  }

}
