package com.springfit.api.repository;

import com.springfit.api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);

    User findUserByEmail(String email);
}
