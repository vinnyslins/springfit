import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TrainProvider } from '../../providers/train';
import { UserProvider } from '../../providers/user';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public learner: any;
  public trains: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public trainProvider: TrainProvider,
    public userProvider: UserProvider
  ) {
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

  createTrain(date: Date): void {
    const payload = {
      date: date,
      instructor: { instructorId: this.userProvider.user.userId },
      learner: { learnerId: this.learner.userId }
    };

    this.trainProvider.createTrain(payload).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
}
