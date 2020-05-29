package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewsRepository extends JpaRepository<Reviews, String> {
    List<Reviews> findByPrdlstreportno(String prdlstreportno);
}
