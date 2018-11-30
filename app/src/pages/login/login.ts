import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(): void {
    localStorage.setItem('token', 'token');
    this.navCtrl.setRoot(TabsPage);
  }
}
