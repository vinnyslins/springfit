import { Component, OnInit, ViewChild } from '@angular/core';
import { ExerciseComponent } from './exercise/exercise.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { Exercise, ExercisesService } from 'src/app/services/exercises.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['../comum-management/users.component.scss']
})
export class ExercisesComponent implements OnInit {

  @ViewChild(ExerciseComponent) exerciseComponent: ExerciseComponent;
  @ViewChild(EditExerciseComponent) editExerciseComponent: EditExerciseComponent;

  SelectedExercise: Exercise;
  Exercises: Array<Exercise>;

  constructor(private usersService: UsersService, private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() {
    this.getExercises();
    if (this.usersService.CurrentUser == undefined) {
      this.router.navigate(['/home']);
    }
  }

  getExercises(){
    this.exercisesService.getExercises().subscribe(result => this.Exercises = result);
  }

  listExercisesChanged(exercise: Exercise): void {
    if (exercise == undefined)
      this.SelectedExercise = undefined;

    this.getExercises();
  }

  reciverFeedback(exerciseSelected: Exercise): void {
    this.SelectedExercise = exerciseSelected;
  }

  createNewExercise(): void {
    this.SelectedExercise = new Exercise();
  }

}
