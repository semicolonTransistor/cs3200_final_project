package edu.northeastern.cs3200.final_project.repositories;

import edu.northeastern.cs3200.final_project.models.Rating;
import edu.northeastern.cs3200.final_project.models.RatingKey;
import org.springframework.data.repository.CrudRepository;

public interface RatingRepository extends CrudRepository<Rating, RatingKey> {
}
