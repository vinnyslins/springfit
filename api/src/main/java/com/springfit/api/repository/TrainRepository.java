package com.springfit.api.repository;

import com.springfit.api.models.Train;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainRepository extends JpaRepository<Train, Long> {
    Train findById(long id);
}
