package edu.northeastern.cs3200.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "ingredients_to_recipes")
public class IngredientToRecipe {
    @EmbeddedId
    @JsonIgnore
    private IngredientToRecipeKey id;

    @ManyToOne
    @JsonIgnore
    @MapsId("recipe")
    @JoinColumn(name = "recipe")
    private Recipe recipe;

    @ManyToOne
    @MapsId("ingredient")
    @JoinColumn(name = "ingredient")
    private Ingredient ingredient;

    private Double quantity;

    private String unit;

    public IngredientToRecipeKey getId() {
        return id;
    }

    public void setId(IngredientToRecipeKey id) {
        this.id = id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }


}
