package com.example.springtemplate.repositories;

import com.example.springtemplate.models.IngredientToRecipe;
import com.example.springtemplate.models.IngredientToRecipeKey;
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
