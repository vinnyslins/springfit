import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user';
import swal from 'sweetalert2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  login(): void {
    this.userProvider.login().then(() => {
      localStorage.setItem('token', 'token');
      this.navCtrl.setRoot(TabsPage);
    }).catch(() => {
      swal({
        title: 'Erro',
        text: 'Ocorreu um erro inesperado.',
        type: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
    });
  }
}
