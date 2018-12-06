package com.springfit.api.resources;

import com.springfit.api.models.Practice;
import com.springfit.api.repository.PracticeRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Api(value = "Practice API")
@CrossOrigin(origins = "*")
public class PracticeResource {
    @Autowired
    PracticeRepository practiceRepository;

    @GetMapping("/practices")
    @ApiOperation(value = "List all practices.")
    public List<Practice> listPractices() {
        return practiceRepository.findAll();
    }

    @GetMapping("/practice/{id}")
    @ApiOperation(value = "Get a practice by id.")
    public Practice listPractice(@PathVariable(value = "id") long id) {
        return practiceRepository.findById(id);
    }

    @PostMapping("/practice")
    @ApiOperation(value = "Create a practice.")
    public Practice createPractice(@RequestBody Practice practice) {
        return practiceRepository.save(practice);
    }

    @DeleteMapping("/practice")
    @ApiOperation(value = "Delete a practice.")
    public void deletePractice(@RequestBody Practice practice) {
        practiceRepository.delete(practice);
    }

    @PutMapping("/practice")
    @ApiOperation(value = "Update a practice.")
    public Practice updatePractice(@RequestBody Practice practice) {
        return practiceRepository.save(practice);
    }
}
