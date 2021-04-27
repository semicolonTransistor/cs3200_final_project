package edu.northeastern.cs3200.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String instructions;

    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "author", nullable = false)
    private User author;

    @OneToMany(mappedBy = "recipe")
    Set<IngredientToRecipe> ingredientsMapping;

    @JsonIgnore
    @OneToMany(mappedBy = "recipe")
    Set<Rating> ratings;

    public Recipe(){

    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getInstructions() {
        return instructions;
    }

    public Category getCategory() {
        return category;
    }

    public User getAuthor() {
        return author;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Set<Rating> getRatings(){
        return this.ratings;
    }

    public Set<IngredientToRecipe> getIngredientsMapping() {
        return ingredientsMapping;
    }
}
