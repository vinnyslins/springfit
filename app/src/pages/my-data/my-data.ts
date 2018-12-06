import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import Swal from 'sweetalert2';
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
    Swal({
      title: 'Sucesso',
      text: 'Dados salvos com sucesso!',
      type: 'success',
      showCloseButton: true,
      showConfirmButton: false
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
