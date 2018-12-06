import { Component, OnInit } from '@angular/core';
import { UsersService, User } from 'src/app/services/users.service';

@Component({
  selector: '.app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  rememberme: boolean;
  loginFaild : boolean;

  userLogin: {"email": string, "password": string} 
  = {"email": "", "password": ""}

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.rememberme = false;
    this.loginFaild = false;
  }

  login(): void{
    this.loginFaild = !this.userService.login(this.userLogin, this.rememberme);
  }
}
