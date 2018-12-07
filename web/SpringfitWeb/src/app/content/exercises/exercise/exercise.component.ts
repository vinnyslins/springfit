import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['../../comum-management/user.component.scss']
})

export class ExerciseComponent implements OnInit {

  @Input('exercise') exercise: Exercise;
  @Input('selectedExercise') selectedExercise: Exercise;

  @Output() selectExercise = new EventEmitter();
  
  ngOnInit() {
  }
  
  constructor() {
  }

  OnSelect() {
    this.feedback();
  }

  feedback() {
    this.selectExercise.emit(this.exercise);
  }

}
