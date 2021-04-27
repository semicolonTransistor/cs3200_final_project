package edu.northeastern.cs3200.final_project.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class RatingKey implements Serializable {

    @Column(name = "user")
    private Integer user;

    @Column(name = "recipe")
    private Integer recipe;

    public Integer getUser() {
        return user;
    }

    public void setUser(Integer user) {
        this.user = user;
    }

    public Integer getRecipe() {
        return recipe;
    }

    public void setRecipe(Integer recipe) {
        this.recipe = recipe;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RatingKey ratingKey = (RatingKey) o;
        return user.equals(ratingKey.user) && recipe.equals(ratingKey.recipe);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, recipe);
    }

    public RatingKey(Integer user, Integer recipe) {
        this.user = user;
        this.recipe = recipe;
    }

    public RatingKey(){

    }
}
