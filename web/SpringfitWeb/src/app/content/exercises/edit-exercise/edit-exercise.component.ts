import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ExercisesService, Exercise } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['../../comum-management/edit-user.component.scss']
})

export class EditExerciseComponent implements OnInit {

  @Input('exercise') exercise: Exercise;

  @Output() exercisesChanged = new EventEmitter();
  @Output() unselectExercise = new EventEmitter();

  bufferExercise: Exercise;

  constructor(private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    const exercise: SimpleChange = changes.exercise;

    this.bufferExercise = new Exercise();

    if (this.exercise != undefined){
      this.bufferExercise.name = this.exercise.name;
      this.bufferExercise.idExercise = this.exercise.idExercise;
    }
  }

  updateExercise() {
    this.exercisesService.updateExercise(this.bufferExercise);

    this.exercise = this.bufferExercise;
    this.feedback();
  }

  deletExercise() {
    this.exercisesService.deletExercise(this.bufferExercise).subscribe((response) => {
      console.log(response);
    }, (erro) => {
      console.log(erro);
    });

    this.exercise = this.bufferExercise;
    this.feedback();
  }

  registerExercise(): void {
    this.exercisesService.addExercise(this.bufferExercise).subscribe();

    this.feedback();
  }

  exerciseChanged(): boolean {
    if (this.exercise == undefined || this.bufferExercise == undefined)
      return false;

    if (this.bufferExercise.name != this.exercise.name)
      return false;

    return true;
  }

  ableToRegister(): boolean {
    if (this.bufferExercise.name != "")
      return false;
    else
      return true;
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  unselectExercises() {
    this.unselectExercise.emit(undefined);
  }

  feedback() {
    this.exercisesChanged.emit(this.bufferExercise);
  }

}
