import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
})
export class MyDataPage {
  public periods: string[] = ['Manhã', 'Tarde', 'Noite'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  save(): void {
    console.log('Dados salvos com sucesso!');
  }
}
