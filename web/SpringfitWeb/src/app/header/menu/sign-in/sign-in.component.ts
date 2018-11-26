import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: '.app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UsersService) { }

  email : string;
  password : string;

  ngOnInit() {
  }

  PasswordInputChanged(event : any){
    this.password = event.target.value;
  }

  EmailInputChanged(event : any){
    this.password = event.target.value;
  }

  Login(){
    this.userService.Login(this.email, this.password);
  }
}
