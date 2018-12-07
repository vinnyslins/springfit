import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExercisesService {

  exercisesHttpURL: string = 'https://springfit.herokuapp.com/api/exercises/';
  exerciseHttpURL: string = 'https://springfit.herokuapp.com/api/exercise/';

  Exercises: Array<Exercise>;

  constructor(private http: HttpClient) { }

  getExercise(exercise_id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.exerciseHttpURL}` + exercise_id);
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.exercisesHttpURL}`);
  }

  addExercise(new_exercise: Exercise): Observable<any> {
    return this.http.post(`${this.exerciseHttpURL}`, new_exercise);
  }

  deletExercise(deleted_exercise){
    return this.http.delete(`${this.exerciseHttpURL}${deleted_exercise.idExercise}`);
  }

  updateExercise(updated_exercise: Exercise) {
    console.log(updated_exercise);
    return this.http.put(`${this.exerciseHttpURL}`, updated_exercise);
  }
  
}

export class Exercise {
  
  idExercise: number;
  name: string;

  constructor() {
    this.name = "";
  }
}