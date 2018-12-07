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
  public email = '';
  public password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  login(): void {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.userProvider.login(payload).then(response => {
      if (response) {
        if (response.permission.idPermission === 3 || response.permission.idPermission === 4) {
          this.userProvider.user = response;
          localStorage.setItem('id', response.userId);
          this.navCtrl.setRoot(TabsPage);
        } else {
          swal({
            title: 'Erro',
            text: 'Aplicativo disponível apenas para alunos e instrutores.',
            type: 'error',
            showCloseButton: true,
            showConfirmButton: false
          });
        }
      } else {
        swal({
          title: 'Erro',
          text: 'E-mail ou senha incorretos.',
          type: 'error',
          showCloseButton: true,
          showConfirmButton: false
        });
      }
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
