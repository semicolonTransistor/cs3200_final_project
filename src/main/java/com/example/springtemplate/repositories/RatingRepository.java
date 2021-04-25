package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Rating;
import com.example.springtemplate.models.RatingKey;
import org.springframework.data.repository.CrudRepository;

public interface RatingRepository extends CrudRepository<Rating, RatingKey> {
}
