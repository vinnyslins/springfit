import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public learner: any;
  public trains: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.learner = navParams.get('learner');
    this.trains = this.getWeek();
  }

  getWeek(): Date[] {
    const week = [];
    const current = new Date();
    current.setDate((current.getDate() - current.getDay()));
    for (let i = 0; i < 7; i++) {
      week.push({
        date: new Date(current),
        pratices: []
      });
      current.setDate(current.getDate() +1);
    }
    return week;
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
