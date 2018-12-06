package com.springfit.api.resources;

import com.springfit.api.models.Permission;
import com.springfit.api.repository.PermissionRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Api(value = "Permissions API")
@CrossOrigin(origins = "*")
public class PermissionResource {
    @Autowired
    PermissionRepository permissionRepository;

    @GetMapping("/Permissions")
    @ApiOperation(value = "List all permissions.")
    public List<Permission> listPermissions() {
        return permissionRepository.findAll();
    }

    @GetMapping("/Permission/{id}")
    @ApiOperation(value = "Get a permission by id.")
    public Permission listPermission(@PathVariable(value = "id") long id) {
        return permissionRepository.findById(id);
    }

    @PostMapping("/Permission")
    @ApiOperation(value = "Create a permission.")
    public Permission createPermission(@RequestBody Permission permission) {
        return permissionRepository.save(permission);
    }

    @DeleteMapping("/Permission")
    @ApiOperation(value = "Delete a permission.")
    public void deletePermission(@RequestBody Permission permission) {
        permissionRepository.delete(permission);
    }

    @PutMapping("/Permission")
    @ApiOperation(value = "Update a permission.")
    public Permission updatePermission(@RequestBody Permission permission) {
        return permissionRepository.save(permission);
    }
}
