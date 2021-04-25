package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating {

    @EmbeddedId
    @JsonIgnore
    private RatingKey id;

    @ManyToOne
    @MapsId("user")
    @JoinColumn(name = "user")
    private User user;

    @ManyToOne
    @MapsId("recipe")
    @JoinColumn(name = "recipe")
    private Recipe recipe;

    private Boolean likes;
    private Integer score;

    public RatingKey getId() {
        return id;
    }

    public void setId(RatingKey id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public Recipe getRecipe() {
        return recipe;
    }


    public Boolean getLikes() {
        return likes;
    }

    public void setLikes(Boolean likes) {
        this.likes = likes;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}
