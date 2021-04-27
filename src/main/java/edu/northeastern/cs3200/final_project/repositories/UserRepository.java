package edu.northeastern.cs3200.final_project.repositories;

import edu.northeastern.cs3200.final_project.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository
        extends CrudRepository<User, Integer> {
    @Query(value = "SELECT * FROM users",
            nativeQuery = true)
    List<User> findAllUsers();
    @Query(value = "SELECT * FROM users WHERE id=:userId",
            nativeQuery = true)
    User findUserById(@Param("userId") Integer id);
}
