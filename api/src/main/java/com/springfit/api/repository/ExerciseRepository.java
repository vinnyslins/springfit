package com.springfit.api.repository;

import com.springfit.api.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    Exercise findById(long id);
}
