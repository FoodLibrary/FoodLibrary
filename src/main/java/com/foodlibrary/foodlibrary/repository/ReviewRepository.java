package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findAllByPrdlstreportno(String prdlstreportno);

    int countByPrdlstreportno(String prdlstreportno);
    List<Review> findByPrdlstreportno(String prdlstreportno);

    Review findByPrdlstreportnoAndNickname(String prdlstreportno,String nickname);
}