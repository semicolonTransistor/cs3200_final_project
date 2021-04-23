package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

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
    @JsonIgnore
    @JoinColumn(name = "author", nullable = false)
    private User author;

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
}
