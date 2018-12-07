import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import swal from 'sweetalert2';
import { UserProvider } from '../../providers/user';

@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
})
export class MyDataPage {
  public periods: string[] = ['Manhã', 'Tarde', 'Noite'];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public userProvider: UserProvider
  ) {
  }

  ionViewDidEnter(): void {
    this.platform.registerBackButtonAction(() => {
      this.dismiss();
    });
  }

  save(): void {
    this.userProvider.saveUser().then((response) => {
      swal({
        title: 'Sucesso',
        text: 'Dados salvos com sucesso.',
        type: 'success',
        showCloseButton: true,
        showConfirmButton: false
      });
    }).catch(() => {
      swal({
        title: 'Erro',
        text: 'Ocorreu um erro ao salvar os dados.',
        type: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
    });
  }

  logout(): void {
    localStorage.removeItem('id');
    location.reload();
  }

  dismiss(): void {
    this.navCtrl.parent.select(0);
  }
}
