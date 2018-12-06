package com.springfit.api.resources;

import com.springfit.api.models.Exercise;
import com.springfit.api.repository.ExerciseRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Api(value = "Exercise API")
@CrossOrigin(origins = "*")
public class ExerciseResource {
    @Autowired
    ExerciseRepository exerciseRepository;

    @GetMapping("/exercises")
    @ApiOperation(value = "List all exercises.")
    public List<Exercise> listExercises() {
        return exerciseRepository.findAll();
    }

    @GetMapping("/exercise/{id}")
    @ApiOperation(value = "Get a exercise by id.")
    public Exercise listExercise(@PathVariable(value = "id") long id) {
        return exerciseRepository.findById(id);
    }

    @PostMapping("/exercise")
    @ApiOperation(value = "Create a exercise.")
    public Exercise createExercise(@RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @DeleteMapping("/exercise")
    @ApiOperation(value = "Delete a exercise.")
    public void deleteExercise(@RequestBody Exercise exercise) {
        exerciseRepository.delete(exercise);
    }

    @PutMapping("/exercise")
    @ApiOperation(value = "Update a exercise.")
    public Exercise updateExercise(@RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }
}
