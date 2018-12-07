import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})

export class ModalLoginComponent implements OnInit {

  constructor(private userService: UsersService) { }

  loginFaild: boolean;
  rememberme: boolean;

  userLogin: { "email": string, "password": string } = { "email": "", "password": "" }

  ngOnInit() {
  }

  login(): void {
    this.loginFaild = !this.userService.login(this.userLogin, this.rememberme);
  }

}
