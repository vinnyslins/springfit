import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

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

  public currentLearner: any = {};
  public learners = [
    { name: 'Alan Vinicius' },
    { name: 'Lucas Teixeira' },
    { name: 'Marcos Vinicius' },
    { name: 'Pedro Daniel' },
    { name: 'Vinnys Lins' },
  ];

  constructor(public navCtrl: NavController, private platform: Platform, private modalCtrl: ModalController) {
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
    this.currentLearner = learner;
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
