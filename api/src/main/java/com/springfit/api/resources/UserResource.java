package com.springfit.api.resources;

import com.springfit.api.Login;
import com.springfit.api.models.User;
import com.springfit.api.repository.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Api(value = "Users API")
@CrossOrigin(origins = "*")
public class UserResource {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    @ApiOperation(value = "List all users.")
    public List<User> listUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    @ApiOperation(value = "Get a user by id.")
    public User listUser(@PathVariable(value = "id") long id) {
        return userRepository.findById(id);
    }

    @PostMapping("/user")
    @ApiOperation(value = "Create a user.")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("/user")
    @ApiOperation(value = "Delete a user.")
    public void deleteUser(@RequestBody User user) {
        userRepository.delete(user);
    }

    @PutMapping("/user")
    @ApiOperation(value = "Update a user.")
    public User updateUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    @ApiOperation(value = "This is loggin")
    public User loginUser(@RequestBody Login login) {
        List<User> allUsers = userRepository.findAll();

        for (User user : allUsers) {
            if (user.getEmail().equals(login.getEmail()) && user.getPassword().equals(login.getPassword())) {
                return user;
            }
        }

        return null;
    }
}
