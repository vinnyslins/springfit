import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { UserProvider } from '../../providers/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public percent = 82;
  public exercises: any[] = [
    { name: 'Agachamento fundo', series: 10, repeats: 2 },
    { name: 'Flexão de braços', series: 30, repeats: 2 },
    { name: 'Abdominal crunch', series: 20, repeats: 5 },
    { name: 'Tríceps testa', series: 20, repeats: 3 },
    { name: 'Puxada pulley pela frente', series: 15, repeats: 2 }
  ];

  public learners: any[] = [];

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private modalCtrl: ModalController,
    public userProvider: UserProvider
  ) {
    const id = localStorage.getItem('id');
    this.userProvider.getUser(id).then(() => {
      if (this.userProvider.user.permission.idPermission === 3) {
        // Get data for learner
      } else {
        // Get data for instructor
        this.userProvider.getUsers().then(response => {
          this.learners = response.filter(learner => learner.permission.idPermission === 3);
        });
      }
    });
  }

  ionViewDidEnter(): void {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    });
  }

  toExercise(exercise: any): void {
    exercise.done = true;
  }

  openModal(learner: any): void {
    const modal = this.modalCtrl.create(ModalPage, { learner: learner });
    modal.present();
  }
}
