import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { UserProvider } from '../../providers/user';
import { TrainProvider } from '../../providers/train';
import swal from 'sweetalert2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public percent = 0;
  public practices: any[] = [];
  public learners: any[] = [];

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private modalCtrl: ModalController,
    public userProvider: UserProvider,
    public trainProvider: TrainProvider
  ) {
    const id = localStorage.getItem('id');
    this.userProvider.getUser(id).then(() => {
      if (this.userProvider.user.permission.idPermission === 3) {
        // Get data for learner
        const date = new Date().toISOString().slice(0, 10);
        this.trainProvider.getPratices().then(practices => {
          this.trainProvider.getTrains().then(trains => {
            const currentTrain = trains.find(train => {
              return train.date == date && train.user.userId === this.userProvider.user.userId;
            });
            if (currentTrain) {
              this.practices = practices.filter(practice => practice.train.idTrain == currentTrain.idTrain);
              if (this.practices.length) this.calculatePercent();
            }
          });
        });
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

  toPractice(practice: any): void {
    const clonePractice = JSON.parse(JSON.stringify(practice));
    clonePractice.done = true;
    this.trainProvider.savePractice(clonePractice).then(() => {
      swal({
        title: 'Sucesso',
        text: 'Parabéns por mais uma prática concluída.',
        type: 'success',
        showCloseButton: true,
        showConfirmButton: false
      });
      practice.done = true;
      this.calculatePercent();
    }).catch(() => {
      swal({
        title: 'Erro',
        text: 'Ocorreu um erro ao concluir prática.',
        type: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
    });
  }

  openModal(learner: any): void {
    const modal = this.modalCtrl.create(ModalPage, { learner: learner });
    modal.present();
  }

  calculatePercent(): void {
    this.percent = this.practices.filter(practice => practice.done).length / this.practices.length * 100;
  }
}
