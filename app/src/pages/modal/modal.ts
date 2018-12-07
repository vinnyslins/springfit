import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, Platform } from 'ionic-angular';
import { TrainProvider } from '../../providers/train';
import { UserProvider } from '../../providers/user';
import swal from 'sweetalert2';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public learner: any;
  public trains: any[];
  public exercises: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private platform: Platform,
    public trainProvider: TrainProvider,
    public userProvider: UserProvider,
    private alertCtrl: AlertController
  ) {
    this.learner = navParams.get('learner');
    this.trains = this.getWeek();

    this.trainProvider.getPratices().then(practices => {
      this.trainProvider.getTrains().then(response => {
        const trains = response.filter(train => train.user && train.user.userId === this.learner.userId);
        this.trains.forEach(day => {
          const train = trains.find(element => element.date == day.date);
          if (train) {
            day.idTrain = train.idTrain;
            day.practices = practices.filter(practice => practice.train.idTrain == train.idTrain);
          }
        });
      });
    });

    this.trainProvider.getExercises().then(response => {
      this.exercises = response;
    });
  }

  ionViewDidEnter(): void {
    this.platform.registerBackButtonAction(() => {
      this.dismiss();
    });
  }

  getWeek(): Date[] {
    const week = [];
    const current = new Date();
    current.setDate((current.getDate() - current.getDay()));
    for (let i = 0; i < 7; i++) {
      week.push({
        date: new Date(current).toISOString().slice(0, 10),
        practices: []
      });
      current.setDate(current.getDate() +1);
    }
    return week;
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    });
  }

  createTrain(date: Date): void {
    const payload = {
      date: date,
      user: this.learner
    };

    this.trainProvider.createTrain(payload).then(response => {
      swal({
        title: 'Sucesso',
        text: 'Treino criado com sucesso.',
        type: 'success',
        showCloseButton: true,
        showConfirmButton: false
      });
      this.trains.find(train => train.date == response.date).idTrain = response.idTrain;
    }).catch(() => {
      swal({
        title: 'Erro',
        text: 'Ocorreu um erro ao criar treino.',
        type: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
    });
  }

  createPractice(train: any): void {
    const payload: any = {
      train: train,
      done: false
    };

    const seriesPrompt = this.alertCtrl.create({
      title: 'Repetições e séries',
      inputs: [
        { type: 'number', name: 'repeats', placeholder: 'Repetições' },
        { type: 'number', name: 'series', placeholder: 'Séries' }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            if (!data.repeats || !data.series) return false;
            payload.repeats = data.repeats;
            payload.series = data.series;
            this.trainProvider.createPractice(payload).then(response => {
              train.practices.push(response);
              swal({
                title: 'Sucesso',
                text: 'Prática criada com sucesso.',
                type: 'success',
                showCloseButton: true,
                showConfirmButton: false
              });
            }).catch(() => {
              swal({
                title: 'Erro',
                text: 'Ocorreu um erro ao criar prática.',
                type: 'error',
                showCloseButton: true,
                showConfirmButton: false
              });
            });
          }
        }
      ]
    });

    const exercisePrompt = this.alertCtrl.create({
      title: 'Exercício',
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            if (!data) return false;
            payload.exercise = data;
            seriesPrompt.present();
          }
        }
      ]
    });

    this.exercises.forEach(exercise => {
      exercisePrompt.addInput({ type: 'radio', label: exercise.name, value: exercise });
    });

    exercisePrompt.present();
  }

  deletePractice(train: any, practice: any): void {
    this.alertCtrl.create({
      message: 'Tem certeza que deseja excluir essa prática?',
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Confirmar',
          handler: () => {
            this.trainProvider.deletePractices(practice.idPractice).then(() => {
              swal({
                title: 'Sucesso',
                text: 'Prática excluída com sucesso.',
                type: 'success',
                showCloseButton: true,
                showConfirmButton: false
              });
              const index = train.practices.indexOf(practice);
              train.practices.splice(index, 1);
            }).catch(() => {
              swal({
                title: 'Erro',
                text: 'Ocorreu um erro ao excluir prática.',
                type: 'error',
                showCloseButton: true,
                showConfirmButton: false
              });
            });
          }
        }
      ]
    }).present();
  }
}
