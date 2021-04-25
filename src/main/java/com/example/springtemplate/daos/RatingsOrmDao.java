package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.models.Rating;
import com.example.springtemplate.models.RatingKey;
import com.example.springtemplate.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RatingsOrmDao {
    @Autowired
    RatingRepository repository;

    @GetMapping("/api/ratings")
    public List<Rating> getAll(){
        List<Rating> result = new ArrayList<>();
        repository.findAll().forEach(result::add);
        return result;
    }

    @GetMapping("/api/ratings/{user}/{recipe}")
    public Rating getById(@PathVariable("user") Integer user, @PathVariable("recipe") Integer recipe){
        return repository.findById(new RatingKey(user, recipe))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/api/ratings")
    public Rating create(@RequestBody Rating rating){
        return repository.save(rating);
    }

    @DeleteMapping("/api/ratings/{user}/{recipe}")
    public void delete(@PathVariable("user") Integer user, @PathVariable("recipe") Integer recipe){
        repository.deleteById(new RatingKey(user, recipe));
    }
}
