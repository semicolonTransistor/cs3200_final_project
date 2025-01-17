package edu.northeastern.cs3200.final_project.repositories;

import edu.northeastern.cs3200.final_project.models.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipesRepository extends CrudRepository<Recipe, Integer> {
//    @Query(value = "SELECT * FROM recipes",
//            nativeQuery = true)
//    List<Recipe> findAllRecipes();
//    @Query(value = "SELECT * FROM recipes WHERE id=:id",
//            nativeQuery = true)
//    Recipe findRecipeById(@Param("id") Integer id);

    @Query(value = "SELECT r FROM Recipe r WHERE r.author.id = :id")
    List<Recipe> findByAuthor(@Param("id") Integer author);

    @Query(value = "SELECT r FROM Recipe r WHERE r.title LIKE CONCAT('%', :title, '%')")
    List<Recipe> findByTitle(@Param("title") String title);

    @Query(value = "" +
            "SELECT * FROM recipes " +
            "WHERE recipes.id IN (" +
            "SELECT ingredients_to_recipes.recipe " +
            "FROM ingredients_to_recipes " +
            "WHERE ingredients_to_recipes.ingredient = :id)", nativeQuery = true)
    List<Recipe> findByIngredient(@Param("id") Integer ingredientId);
}
