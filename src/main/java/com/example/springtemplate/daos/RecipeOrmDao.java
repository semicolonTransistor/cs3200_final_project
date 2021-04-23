package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecipeOrmDao {
    @Autowired
    RecipesRepository recipesRepository;

    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes(){
        return recipesRepository.findAllRecipes();
    }

}
