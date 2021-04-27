package edu.northeastern.cs3200.final_project.repositories;

import edu.northeastern.cs3200.final_project.models.Ingredient;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
}
