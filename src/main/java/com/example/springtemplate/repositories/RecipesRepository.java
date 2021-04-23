package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipesRepository extends CrudRepository<Recipe, Integer> {
    @Query(value = "SELECT * FROM recipes",
            nativeQuery = true)
    List<Recipe> findAllRecipes();
    @Query(value = "SELECT * FROM recipes WHERE id=:id",
            nativeQuery = true)
    Recipe findRecipeById(@Param("id") Integer id);
}
