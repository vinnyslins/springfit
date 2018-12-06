package com.springfit.api.repository;

import com.springfit.api.models.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
    Permission findById(long id);
}
