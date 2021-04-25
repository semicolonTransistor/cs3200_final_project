package com.example.springtemplate.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Table(name = "ingredients_to_recipes")
public class IngredientToRecipeKey implements Serializable {
    @Column(name = "recipe")
    private Integer recipe;

    @Column(name = "ingredient")
    private Integer ingredient;

    public Integer getRecipe() {
        return recipe;
    }

    public void setRecipe(Integer recipe) {
        this.recipe = recipe;
    }

    public Integer getIngredient() {
        return ingredient;
    }

    public void setIngredient(Integer ingredient) {
        this.ingredient = ingredient;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IngredientToRecipeKey that = (IngredientToRecipeKey) o;
        return recipe.equals(that.recipe) && ingredient.equals(that.ingredient);
    }

    @Override
    public int hashCode() {
        return Objects.hash(recipe, ingredient);
    }

    public IngredientToRecipeKey(Integer recipe, Integer ingredient) {
        this.recipe = recipe;
        this.ingredient = ingredient;
    }

    public IngredientToRecipeKey(){

    }
}
