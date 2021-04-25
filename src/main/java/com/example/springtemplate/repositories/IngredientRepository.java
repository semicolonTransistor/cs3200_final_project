package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
}
