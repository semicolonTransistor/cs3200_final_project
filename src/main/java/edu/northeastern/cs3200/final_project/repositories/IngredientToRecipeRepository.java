package edu.northeastern.cs3200.final_project.repositories;

import edu.northeastern.cs3200.final_project.models.IngredientToRecipe;
import edu.northeastern.cs3200.final_project.models.IngredientToRecipeKey;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface IngredientToRecipeRepository
        extends CrudRepository<IngredientToRecipe, IngredientToRecipeKey> {

    @Modifying
    @Query("DELETE FROM IngredientToRecipe iToR WHERE iToR.id.recipe = :id")
    void DeleteAllMappingRelatedToRecipe(@Param("id") Integer recipeId);
}
