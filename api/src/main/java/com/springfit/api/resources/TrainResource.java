package com.springfit.api.resources;

import com.springfit.api.models.Train;
import com.springfit.api.repository.TrainRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Api(value = "Train API")
@CrossOrigin(origins = "*")
public class TrainResource {
    @Autowired
    TrainRepository trainRepository;

    @GetMapping("/trains")
    @ApiOperation(value = "List all trains.")
    public List<Train> listTrains() {
        return trainRepository.findAll();
    }

    @GetMapping("/train/{id}")
    @ApiOperation(value = "Get a train by id.")
    public Train listTrain(@PathVariable(value = "id") long id) {
        return trainRepository.findById(id);
    }

    @PostMapping("/train")
    @ApiOperation(value = "Create a train.")
    public Train createTrain(@RequestBody Train train) {
        return trainRepository.save(train);
    }

    @DeleteMapping("/train")
    @ApiOperation(value = "Delete a train.")
    public void deleteTrain(@RequestBody Train train) {
        trainRepository.delete(train);
    }

    @PutMapping("/train")
    @ApiOperation(value = "Update a train.")
    public Train updateTrain(@RequestBody Train train) {
        return trainRepository.save(train);
    }
}