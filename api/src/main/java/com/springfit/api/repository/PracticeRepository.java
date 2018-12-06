package com.springfit.api.repository;

import com.springfit.api.models.Practice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PracticeRepository extends JpaRepository<Practice, Long> {
    Practice findById(long id);
}
