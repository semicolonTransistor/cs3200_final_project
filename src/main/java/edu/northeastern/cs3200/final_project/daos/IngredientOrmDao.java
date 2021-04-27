package edu.northeastern.cs3200.final_project.daos;

import edu.northeastern.cs3200.final_project.models.Ingredient;
import edu.northeastern.cs3200.final_project.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class IngredientOrmDao {
    @Autowired
    IngredientRepository repository;

    @GetMapping("/api/ingredients")
    public List<Ingredient> getAll(){
        List<Ingredient> result = new ArrayList<>();
        repository.findAll().forEach(result::add);
        return result;
    }

    @GetMapping("/api/ingredients/{id}")
    public Ingredient getById(@PathVariable("id") Integer id){
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/api/ingredients")
    public Ingredient create(@RequestBody Ingredient ingredient){
        ingredient.setId(null);
        return repository.save(ingredient);
    }

    @PutMapping("/api/ingredients/{id}")
    public Ingredient update(@PathVariable("id") Integer id,
                             @RequestBody Ingredient newIngredient){
        Ingredient ingredient = this.getById(id);
        ingredient.setName(newIngredient.getName());
        return repository.save(ingredient);
    }

    @DeleteMapping("/api/ingredients/{id}")
    public void delete(@PathVariable("id") Integer id){
        repository.deleteById(id);
    }
}
