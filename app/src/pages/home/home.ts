import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private platform: Platform) {
  }

  ionViewDidEnter(): void {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    });
  }

  toExercise(exercise: any): void {
    exercise.done = true;
  }
}
