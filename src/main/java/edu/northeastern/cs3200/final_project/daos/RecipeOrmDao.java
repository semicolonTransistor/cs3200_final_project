package edu.northeastern.cs3200.final_project.daos;

import edu.northeastern.cs3200.final_project.models.IngredientToRecipe;
import edu.northeastern.cs3200.final_project.models.IngredientToRecipeKey;
import edu.northeastern.cs3200.final_project.models.Recipe;
import edu.northeastern.cs3200.final_project.repositories.IngredientToRecipeRepository;
import edu.northeastern.cs3200.final_project.repositories.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class RecipeOrmDao {
    @Autowired
    RecipesRepository repository;

    @Autowired
    IngredientToRecipeRepository mappingRepository;

    @GetMapping("/api/recipes")
    public List<Recipe> findAll(){
        List<Recipe> result = new ArrayList<>();
        repository.findAll().forEach(result::add);
        return result;
    }

    @GetMapping("/api/recipes/{id}")
    public Recipe findById(@PathVariable("id") Integer id){
        Optional<Recipe> result = repository.findById(id);
        return result.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/api/recipes/title/{title}")
    public List<Recipe> findByTitle(@PathVariable("title") String title){
        return repository.findByTitle(title);
    }

    @GetMapping("/api/recipes/author/{id}")
    public List<Recipe> findByAuthor(@PathVariable("id") Integer id){
        return repository.findByAuthor(id);
    }

    @GetMapping("/api/recipes/ingredient/{id}")
    public List<Recipe> findByIngredient(@PathVariable("id") Integer id){
        return repository.findByIngredient(id);
    }

    // only commit changes if all succeeds
    @Transactional
    @PostMapping("/api/recipes")
    public Recipe create(@RequestBody Recipe recipe){
        // check legality
        for(IngredientToRecipe iToR: recipe.getIngredientsMapping()){
            if(iToR.getIngredient().getId() == null){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unknown ingredient");
            }
        }
        recipe.setId(null);
        Recipe result = repository.save(recipe);

        // save mapping too
        for(IngredientToRecipe iToR: recipe.getIngredientsMapping()){
            iToR.setId(new IngredientToRecipeKey(result.getId(), iToR.getIngredient().getId()));
            iToR.setRecipe(result);
        }
        mappingRepository.saveAll(recipe.getIngredientsMapping());
        return result;
    }

    @Transactional
    @PutMapping("/api/recipes/{id}")
    public Recipe update(@PathVariable("id") Integer id, @RequestBody Recipe newRecipe){

        // check legality
        for(IngredientToRecipe iToR: newRecipe.getIngredientsMapping()){
            if(iToR.getIngredient().getId() == null){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unknown ingredient");
            }
        }

        // update recipe
        Recipe recipe = repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        recipe.setTitle(newRecipe.getTitle());
        recipe.setAuthor(newRecipe.getAuthor());
        recipe.setCategory(newRecipe.getCategory());
        recipe.setTitle(newRecipe.getTitle());
        recipe.setInstructions(newRecipe.getInstructions());
        repository.save(recipe);

        mappingRepository.DeleteAllMappingRelatedToRecipe(recipe.getId());

        for(IngredientToRecipe iToR: newRecipe.getIngredientsMapping()){
            iToR.setId(new IngredientToRecipeKey(recipe.getId(), iToR.getIngredient().getId()));
            iToR.setRecipe(recipe);
        }
        mappingRepository.saveAll(newRecipe.getIngredientsMapping());

        return recipe;
    }

    @DeleteMapping("/api/recipes/{id}")
    public void delete(@PathVariable("id") Integer id){
        repository.deleteById(id);
    }


}
